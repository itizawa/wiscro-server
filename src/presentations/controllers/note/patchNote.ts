import { Request, Response } from "express";
import { User } from "~/models/User";
import { UpdateNoteUseCase } from "~/useCases/Note/UpdateNoteUseCase";

const updateNoteUseCase = new UpdateNoteUseCase();

export const patchNote = async (
  req: Request<
    { id: string },
    object,
    { title: string; description: string },
    { id: string }
  > & { user: User },
  res: Response,
) => {
  const { id } = req.params;
  const { user } = req;
  const { title, description } = req.body;

  try {
    const note = await updateNoteUseCase.execute({
      id,
      title,
      description,
      currentUser: user,
    });
    return res.status(200).send({ note });
  } catch (error) {
    return res.status(503).send({ message: "予期せぬエラーが発生しました" });
  }
};
