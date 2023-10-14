import { Request, Response } from "express";
import { ListAnswersByQuestionIdUseCase } from "~/useCases/Answer/ListAnswersByQuestionIdUseCase";

const listAnswersByQuestionIdUseCase = new ListAnswersByQuestionIdUseCase();

export const getAnswersByQuestionId = async (
  req: Request<
    { id: string },
    object,
    object,
    { page?: number; limit?: number }
  >,
  res: Response,
) => {
  const { id: questionId } = req.params;

  try {
    const answers = await listAnswersByQuestionIdUseCase.execute({
      questionId,
    });
    return res.status(200).send({ answers });
  } catch (error) {
    return res.status(503).send({ message: "予期せぬエラーが発生しました" });
  }
};
