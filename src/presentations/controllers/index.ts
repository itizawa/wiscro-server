import * as express from "express";
import { handleLineRequest } from "./line/handleLineRequest";
import { listLinks } from "./links/listLinks";

export const setupExpressRoutes = (express: express.Express): void => {
  express.get("/links", listLinks);
  express.post("/api/line", handleLineRequest);
};
