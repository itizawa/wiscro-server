import { Request, Response } from "express";
import { RetrieveNoteUseCase } from "~/useCases/Note/RetrieveNoteUseCase";

const retrieveNoteUseCase = new RetrieveNoteUseCase();

export const getNote = async (
  req: Request<{ id: string }, object, object, { id: string }>,
  res: Response,
) => {
  const { id } = req.params;
  try {
    const note = await retrieveNoteUseCase.execute({
      id,
    });
    return res.status(200).send({ note });
  } catch (error) {
    return res.status(503).send({ message: "予期せぬエラーが発生しました" });
  }
};
