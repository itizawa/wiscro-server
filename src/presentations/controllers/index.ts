import * as express from "express";

import { postQuestion } from "./question/postQuestion";
import { getQuestion } from "./question/getQuestion";
import { getCurrentUser } from "./user/getCurrentUser";
import { loginRequired } from "~/middlewares/loginRequired";
import { postAnswer } from "./answer/postAnswer";
import { getAnswersByQuestionId } from "./question/getAnswersByQuestionId";

export const setupExpressRoutes = (express: express.Express): void => {
  express.post("/api/answers", loginRequired, postAnswer);
  express.get("/api/questions/:id", getQuestion);
  express.get("/api/questions/:id/answers", getAnswersByQuestionId);
  express.post("/api/questions", loginRequired, postQuestion);
  express.get("/api/me", getCurrentUser);
};
