import { Request, Response } from "express";
import { User } from "~/models/User";
import { CreateAnswerUseCase } from "~/useCases/Answer/CreateAnswerUseCase";

const createAnswerUseCase = new CreateAnswerUseCase();

export const postAnswer = async (
  req: Request & { user: User },
  res: Response,
) => {
  const { user } = req;
  const { url, questionId } = req.body;
  try {
    const answer = await createAnswerUseCase.execute({
      currentUser: user,
      url,
      questionId,
    });

    return res.status(200).send({ answer });
  } catch (error) {
    return res.status(503).send({ message: "予期せぬエラーが発生しました" });
  }
};
