import { Request, Response } from "express";
import { ListPagesByQuestionIdUseCase } from "~/useCases/Page/ListPagesByQuestionIdUseCase";

const listPagesByQuestionIdUseCase = new ListPagesByQuestionIdUseCase();

export const getPagesByQuestionId = async (
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
    const pages = await listPagesByQuestionIdUseCase.execute({
      questionId,
    });
    return res.status(200).send({ pages });
  } catch (error) {
    return res.status(503).send({ message: "予期せぬエラーが発生しました" });
  }
};
