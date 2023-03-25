import { LineUserModel } from "~/models/LineUser/LineUser";
import { PageModel } from "~/models/Page";
import { FetchOgpService } from "~/services/FetchOgpService";
const fetchOgpService = new FetchOgpService();

export class FetchAndSavePageUseCase {
  async execute(url: string, lineUserId: string) {
    const page = await fetchOgpService.fetchOgpByUrl(url);
    const lineUser = await LineUserModel.findOne({ lineUserId });

    if (!lineUser) {
      throw new Error("lineUserが存在しません");
    }

    await PageModel.create({ ...page, lineUser });
  }
}
