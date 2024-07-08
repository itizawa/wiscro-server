import { NoteModel } from "~/models/Note";
import { Page, PageModel } from "~/models/Page";
import { User } from "~/models/User";
// import { openaiService } from "~/services/OpenaiService";

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
      description: "取得中です!",
      createdUserId: currentUser._id,
      noteId,
      isFetching: true,
    });

    await NoteModel.findOneAndUpdate(
      { _id: noteId },
      { latestPageId: page._id, latestPostPageAt: new Date() },
      { upsert: true },
    );

    this.fetchAndSummarizeOgp();

    return page;
  }

  fetchAndSummarizeOgp = async () => {};
}
