import { Request, Response } from "express";
import { RetrieveQuestionUseCase } from "~/useCases/Question/RetrieveQuestionUseCase";

const retrieveQuestionUseCase = new RetrieveQuestionUseCase();

export const getQuestion = async (
  req: Request<{ id: string }, object, object, { id: string }>,
  res: Response,
) => {
  const { id } = req.params;
  try {
    const question = await retrieveQuestionUseCase.execute({
      id,
    });
    return res.status(200).send({ question });
  } catch (error) {
    return res.status(503).send({ message: "予期せぬエラーが発生しました" });
  }
};
