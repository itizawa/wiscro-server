import { Request, Response } from "express";
import { CreateQuestionUseCase } from "~/useCases/Question/CreateQuestionUseCase";

const createQuestionUseCase = new CreateQuestionUseCase();

export const postQuestion = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const question = await createQuestionUseCase.execute({
      title,
      description,
    });

    return res.status(200).send({ question });
  } catch (error) {
    return res.status(503).send({ message: "予期せぬエラーが発生しました" });
  }
};
