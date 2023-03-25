import { LineUserModel } from "~/models/LineUser/LineUser";
import { LineApiService } from "~/services/LineApiService/LineApiService";

const lineApiService = new LineApiService();

export class CreateLineUserUseCase {
  async execute(userId: string) {
    const lienUser = await lineApiService.getProfile(userId);
    await LineUserModel.create(lienUser);

    console.log("CreateLineUserUseCaseです！");
  }
}
