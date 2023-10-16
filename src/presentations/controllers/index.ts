import * as express from "express";

import { postQuestion } from "./question/postQuestion";
import { getQuestion } from "./question/getQuestion";
import { getCurrentUser } from "./user/getCurrentUser";
import { loginRequired } from "~/middlewares/loginRequired";
import { postPage } from "./page/postPage";
import { getPagesByQuestionId } from "./question/getPagesByQuestionId";
import { getQuestions } from "./question/getQuestions";

export const setupExpressRoutes = (express: express.Express): void => {
  express.post("/api/pages", loginRequired, postPage);
  express.get("/api/questions", getQuestions);
  express.get("/api/questions/:id", getQuestion);
  express.get("/api/questions/:id/pages", getPagesByQuestionId);
  express.post("/api/questions", loginRequired, postQuestion);
  express.get("/api/me", getCurrentUser);
};
