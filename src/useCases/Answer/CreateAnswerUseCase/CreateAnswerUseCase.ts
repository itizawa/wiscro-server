import { Answer, AnswerModel } from "~/models/Answer";
import { User } from "~/models/User";

export class CreateAnswerUseCase {
  async execute({
    currentUser,
    url,
    questionId,
  }: Pick<Answer, "url" | "questionId"> & {
    currentUser: User;
  }): Promise<Answer> {
    return await AnswerModel.create({
      url,
      createdUserId: currentUser._id,
      questionId,
    });
  }
}
