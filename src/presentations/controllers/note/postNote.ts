import { Request, Response } from "express";
import { User } from "~/models/User";
import { CreateNoteUseCase } from "~/useCases/Note/CreateNoteUseCase";

const createNoteUseCase = new CreateNoteUseCase();

export const postNote = async (
  req: Request & { user: User },
  res: Response,
) => {
  const { user } = req;
  const { title, description } = req.body;
  try {
    const note = await createNoteUseCase.execute({
      currentUser: user,
      title,
      description,
    });

    return res.status(200).send({ note });
  } catch (error) {
    return res.status(503).send({ message: "予期せぬエラーが発生しました" });
  }
};
