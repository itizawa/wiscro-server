import { Answer, AnswerModel } from "~/models/Answer";
import { User } from "~/models/User";
import { FetchOgpService } from "~/services/FetchOgpService";

const fetchOgpService = new FetchOgpService();

export class CreateAnswerUseCase {
  async execute({
    currentUser,
    url,
    questionId,
  }: Pick<Answer, "url" | "questionId"> & {
    currentUser: User;
  }): Promise<Answer> {
    const ogp = await fetchOgpService.fetchOgpByUrl(url);
    return await AnswerModel.create({
      ...ogp,
      url,
      createdUserId: currentUser._id,
      questionId,
    });
  }
}
