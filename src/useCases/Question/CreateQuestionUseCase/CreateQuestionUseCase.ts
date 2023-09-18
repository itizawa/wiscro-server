import { Question, QuestionModel } from "~/models/Question";

export class CreateQuestionUseCase {
  async execute({
    title,
    description,
  }: Pick<Question, "title" | "description">): Promise<Question> {
    return await QuestionModel.create({ title, description });
  }
}
