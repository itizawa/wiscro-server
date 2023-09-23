import { Request, Response } from "express";

export const getCurrentUser = async (req: Request, res: Response) => {
  return res.status(200).json({ currentUser: req.user });
};
