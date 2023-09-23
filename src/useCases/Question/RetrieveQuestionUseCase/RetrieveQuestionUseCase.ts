import { Question, QuestionModel } from "~/models/Question";

export class RetrieveQuestionUseCase {
  async execute({ id }: { id: string }): Promise<Question> {
    return await QuestionModel.findById(id);
  }
}
