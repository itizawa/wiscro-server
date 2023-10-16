import { Page, PageModel } from "~/models/Page";

export class ListPagesByNoteIdUseCase {
  async execute({ noteId }: { noteId: string }): Promise<Page[]> {
    return await PageModel.find({ noteId });
  }
}
