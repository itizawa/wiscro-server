import { PageModel } from "~/models/Page";
import { FetchOgpService } from "~/services/FetchOgpService";
const fetchOgpService = new FetchOgpService();

export class FetchAndSavePageUseCase {
  async execute(url: string) {
    const page = await fetchOgpService.fetchOgpByUrl(url);
    await PageModel.create(page);
  }
}
