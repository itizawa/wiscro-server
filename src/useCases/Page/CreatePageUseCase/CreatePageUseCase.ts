import { Page, PageModel } from "~/models/Page";
import { User } from "~/models/User";
import { FetchOgpService } from "~/services/FetchOgpService";
import { openaiService } from "~/services/OpenaiService";

const fetchOgpService = new FetchOgpService();

export class CreatePageUseCase {
  async execute({
    currentUser,
    url,
    noteId,
  }: Pick<Page, "url" | "noteId"> & {
    currentUser: User;
  }): Promise<Page> {
    const page = await PageModel.create({
      url,
      title: url,
      description: "取得中です",
      createdUserId: currentUser._id,
      noteId,
      isFetching: true,
    });

    this.fetchAndSummarizeOgp(page, url);

    return page;
  }

  fetchAndSummarizeOgp = async (page: Page, url: string) => {
    const ogp = await fetchOgpService.fetchOgpByUrl(url);

    await PageModel.updateOne(
      { _id: page._id },
      {
        ...ogp,
        body: ogp.body ? `${ogp.body.substring(0, 300)}..` : "",
        isFetching: false,
      },
    );

    const response = await openaiService.summarize({ text: ogp.body });

    await PageModel.updateOne(
      { _id: page._id },
      {
        summary: response.choices
          .map((choice) => choice.message.content)
          .join(`\n`),
      },
    );
  };
}
