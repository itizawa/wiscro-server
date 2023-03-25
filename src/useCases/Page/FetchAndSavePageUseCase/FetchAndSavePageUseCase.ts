import { PageModel } from "~/models/Page";

export class FetchAndSavePageUseCase {
  async execute(url: string) {
    // const lienUser = await lineApiService.getProfile(userId);
    await PageModel.create({ url });
  }
}
