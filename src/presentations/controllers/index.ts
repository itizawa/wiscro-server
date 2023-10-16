import * as express from "express";

import { postNote } from "./note/postNote";
import { getNote } from "./note/getNote";
import { getCurrentUser } from "./user/getCurrentUser";
import { loginRequired } from "~/middlewares/loginRequired";
import { postPage } from "./page/postPage";
import { getPagesByNoteId } from "./note/getPagesByNoteId";
import { getNotes } from "./note/getNotes";

export const setupExpressRoutes = (express: express.Express): void => {
  express.post("/api/pages", loginRequired, postPage);
  express.get("/api/notes", getNotes);
  express.get("/api/notes/:id", getNote);
  express.get("/api/notes/:id/pages", getPagesByNoteId);
  express.post("/api/notes", loginRequired, postNote);
  express.get("/api/me", getCurrentUser);
};
