import * as express from "express";

export const setupExpressRoutes = (express: express.Express): void => {
  // magazines
  express.post("/api/line", () => console.log("hoge"));
};
