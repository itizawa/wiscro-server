import { Answer, AnswerModel } from "~/models/Answer";

export class ListAnswersByQuestionIdUseCase {
  async execute({ questionId }: { questionId: string }): Promise<Answer[]> {
    return await AnswerModel.find({ questionId });
  }
}
