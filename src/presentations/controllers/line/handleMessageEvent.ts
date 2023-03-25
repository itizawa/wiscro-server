import { MessageEvent } from "@line/bot-sdk";
import { isValidUrl } from "~/utils/isValidUrl";

// TODO: ここはDBに保存するようにする
const urls: string[] = [];

/**
 * LINEからのメッセージイベントを処理する
 */
export const handleMessageEvent = async (event: MessageEvent) => {
  if (event.message.type !== "text") {
    return;
  }

  if (event.message.text === "見せて") {
    console.log(urls);
    return;
  }

  if (isValidUrl(event.message.text)) {
    urls.push(event.message.text);
  }
};
