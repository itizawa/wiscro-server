import * as express from "express";
import { handleLineRequest } from "./line/handleLineRequest";
import { listPages } from "./page/listPages";

export const setupExpressRoutes = (express: express.Express): void => {
  express.get("/api/pages", listPages);
  express.post("/api/line", handleLineRequest);
};
