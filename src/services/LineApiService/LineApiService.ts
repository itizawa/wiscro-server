import { Client } from "@line/bot-sdk";
import { config } from "dotenv";
import { LineUser } from "~/models/LineUser/LineUser";

export class LineApiService {
  client: Client;
  constructor() {
    config();

    this.client = new Client({
      channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    });
  }

  async getProfile(userId: string): Promise<LineUser> {
    return this.client.getProfile(userId).then((profile) => {
      return {
        lineUserId: profile.userId,
        displayName: profile.displayName,
        pictureUrl: profile.pictureUrl,
        statusMessage: profile.statusMessage,
      };
    });
  }
}
