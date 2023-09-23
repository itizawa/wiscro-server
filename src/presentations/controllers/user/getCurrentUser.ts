import { Request, Response } from "express";

export const getCurrentUser = async (req: Request, res: Response) => {
  console.log(req.user, "test log");

  return res.status(200).json({ currentUser: req.user });
};
