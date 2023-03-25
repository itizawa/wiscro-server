import { Response, Request } from "express";
import { links } from "../line/handleMessageEvent";

export const listLinks = async (req: Request, res: Response) => {
  return res.json({ links });
};
