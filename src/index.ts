import express from "express";
import { Mongoose, connect } from "mongoose";
import { setupExpressRoutes } from "./presentations/controllers";
import cors from "cors";
import { setupPassport } from "./middlewares/setupPassport";
import session from "express-session";
import MongoStore from "connect-mongo";
import { createServer, Server as httpServer } from "http";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import { requestLoggerMiddleware } from "./middlewares/request-logger";

/*****************************
 * Main Process              *
 *****************************/
export class App {
  app: express.Express;
  port: number;
  httpServer: httpServer;
  mongoClient: Mongoose;

  constructor() {
    this.app = null;
    this.port = parseInt(process.env.PORT) || 8000;
    this.httpServer = null;
  }

  async init() {
    this.setupExpress();
    await this.setupDB();

    setupPassport(this.app);

    // setup Express Routes
    setupExpressRoutes(this.app);

    this.httpServer = createServer(this.app);

    this.app.listen(this.port, () => {
      console.log(`Express app listening at http://localhost:${this.port}`);
    });
  }

  setupExpress() {
    this.app = express();

    this.app.use(
      cors({
        origin: true,
        credentials: true,
      }),
    );
    this.app.use(express.json());
    this.app.use(
      rateLimit({
        windowMs: 60 * 1000, // 1 minutes
        max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
      }),
    );
    this.app.use(mongoSanitize());

    this.app.use(requestLoggerMiddleware);
  }

  async setupDB() {
    const mongoUrl =
      process.env.MONGO_URI || "mongodb://localhost:27017/wiscro";
    await connect(mongoUrl);

    if (!process.env.SESSION_SECRET) {
      throw new Error("Please set session secret!");
    }

    this.app.use(
      session({
        rolling: true,
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 30, // 30day
        },
        store: MongoStore.create({
          mongoUrl,
        }),
      }),
    );
  }
}

const app = new App();
app.init();
