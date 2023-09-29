import { Question, QuestionModel } from "~/models/Question";

export class ListQuestionsUseCase {
  async execute(): Promise<Question[]> {
    return await QuestionModel.find().limit(10).sort("-createdAt");
  }
}
