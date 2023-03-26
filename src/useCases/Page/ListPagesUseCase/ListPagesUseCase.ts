import { Page, PageModel } from "~/models/Page";

export class ListPagesUseCase {
  async execute(): Promise<Page[]> {
    return await PageModel.find();
  }
}
