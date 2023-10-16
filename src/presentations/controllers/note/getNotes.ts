import { Request, Response } from "express";
import { ListNotesUseCase } from "~/useCases/Note/ListNotesUseCase";

const listNotesUseCase = new ListNotesUseCase();

export const getNotes = async (
  req: Request<{ id: string }, object, object, { id: string }>,
  res: Response,
) => {
  try {
    const notes = await listNotesUseCase.execute();
    return res.status(200).send({ notes });
  } catch (error) {
    return res.status(503).send({ message: "予期せぬエラーが発生しました" });
  }
};
