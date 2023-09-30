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
    const answer = await AnswerModel.create({
      url,
      title: url,
      description: "取得中です",
      createdUserId: currentUser._id,
      questionId,
      isFetching: true,
    });

    this.fetchAndSummarizeOgp(answer, url);

    return answer;
  }

  fetchAndSummarizeOgp = async (answer: Answer, url: string) => {
    const ogp = await fetchOgpService.fetchOgpByUrl(url);

    await AnswerModel.updateOne(
      { _id: answer._id },
      { ...ogp, isFetching: false },
    );
  };
}
