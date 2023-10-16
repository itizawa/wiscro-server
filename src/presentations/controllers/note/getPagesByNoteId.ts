import { Request, Response } from "express";
import { ListPagesByNoteIdUseCase } from "~/useCases/Page/ListPagesByNoteIdUseCase";

const listPagesByNoteIdUseCase = new ListPagesByNoteIdUseCase();

export const getPagesByNoteId = async (
  req: Request<
    { id: string },
    object,
    object,
    { page?: number; limit?: number }
  >,
  res: Response,
) => {
  const { id: noteId } = req.params;

  try {
    const pages = await listPagesByNoteIdUseCase.execute({
      noteId,
    });
    return res.status(200).send({ pages });
  } catch (error) {
    return res.status(503).send({ message: "予期せぬエラーが発生しました" });
  }
};
