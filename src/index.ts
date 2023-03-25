import express from "express";
import { connect } from "mongoose";
import { setupExpressRoutes } from "./presentations/controllers";

/*****************************
 * Main Process              *
 *****************************/
export class App {
  app: express.Express;

  constructor() {
    const port = parseInt(process.env.PORT) || 8080;
    this.app = express();
    this.app.use(express.json());

    // setup Express Routes
    setupExpressRoutes(this.app);

    this.app.listen(port, () => {
      console.log(`Express app listening at http://localhost:${port}`);
    });
  }

  async setupDB() {
    const mongoUrl = process.env.MONGO_URI || "mongodb://localhost:27017/webev";
    await connect(mongoUrl);
  }
}

const app = new App();
app.setupDB();
