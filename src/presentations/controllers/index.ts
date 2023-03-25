import * as express from "express";
import { handleLineRequest } from "./line/handleLineRequest";

export const setupExpressRoutes = (express: express.Express): void => {
  express.post("/api/line", handleLineRequest);
};
