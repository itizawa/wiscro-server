import { Request, Response } from "express";
import { ListPagesUseCase } from "~/useCases/Page/ListPagesUseCase";

const listPagesUseCase = new ListPagesUseCase();

export const listPages = async (_req: Request, res: Response) => {
  try {
    const pages = await listPagesUseCase.execute();
    return res.status(200).json({ pages });
  } catch (error) {
    return res.status(503).json({ message: "予期せぬエラーが発生しました" });
  }
};
