import { Question, QuestionModel } from "~/models/Question";
import { User } from "~/models/User";

export class CreateQuestionUseCase {
  async execute({
    currentUser,
    title,
    description,
  }: Pick<Question, "title" | "description"> & {
    currentUser: User;
  }): Promise<Question> {
    return await QuestionModel.create({
      title,
      description,
      createdUserId: currentUser._id,
    });
  }
}
