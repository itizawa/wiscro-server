import { Request, Response } from "express";
import { User } from "~/models/User";
import { CreatePageUseCase } from "~/useCases/Page/CreatePageUseCase";

const createPageUseCase = new CreatePageUseCase();

export const postPage = async (
  req: Request & { user: User },
  res: Response,
) => {
  const { user } = req;
  const { url, noteId } = req.body;
  try {
    const page = await createPageUseCase.execute({
      currentUser: user,
      url,
      noteId,
    });

    return res.status(200).send({ page });
  } catch (error) {
    return res.status(503).send({ message: "予期せぬエラーが発生しました" });
  }
};
