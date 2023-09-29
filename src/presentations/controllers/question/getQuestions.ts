import { Request, Response } from "express";
import { ListQuestionsUseCase } from "~/useCases/Question/ListQuestionsUseCase";

const listQuestionsUseCase = new ListQuestionsUseCase();

export const getQuestions = async (
  req: Request<{ id: string }, object, object, { id: string }>,
  res: Response,
) => {
  try {
    const questions = await listQuestionsUseCase.execute();
    return res.status(200).send({ questions });
  } catch (error) {
    return res.status(503).send({ message: "予期せぬエラーが発生しました" });
  }
};
