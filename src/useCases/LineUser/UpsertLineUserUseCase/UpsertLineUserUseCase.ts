import { LineUserModel } from "~/models/LineUser/LineUser";
import { LineApiService } from "~/services/LineApiService/LineApiService";

const lineApiService = new LineApiService();

export class UpsertLineUserUseCase {
  async execute(userId: string) {
    const lienUser = await lineApiService.getProfile(userId);
    await LineUserModel.updateOne(
      { lineUserId: lienUser.lineUserId },
      lienUser,
      { upsert: true }
    );
  }
}
