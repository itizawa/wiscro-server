import { Page, PageModel } from "~/models/Page";

export class ListPagesByQuestionIdUseCase {
  async execute({ questionId }: { questionId: string }): Promise<Page[]> {
    return await PageModel.find({ questionId });
  }
}
