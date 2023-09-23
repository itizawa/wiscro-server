import * as express from "express";
import { handleLineRequest } from "./line/handleLineRequest";
import { listPages } from "./page/listPages";
import { postQuestion } from "./question/postQuestion";
import { getQuestion } from "./question/getQuestion";
import { getCurrentUser } from "./user/getCurrentUser";
import { loginRequired } from "~/middlewares/loginRequired";

export const setupExpressRoutes = (express: express.Express): void => {
  express.get("/api/pages", listPages);
  express.post("/api/line", handleLineRequest);
  express.get("/api/questions/:id", getQuestion);
  express.post("/api/questions", loginRequired, postQuestion);
  express.get("/api/me", getCurrentUser);
};
