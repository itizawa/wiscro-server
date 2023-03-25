import { MessageEvent } from "@line/bot-sdk";
import { isValidUrl } from "~/utils/isValidUrl";

// TODO: ここはDBに保存するようにする
export const links: string[] = [];

/**
 * LINEからのメッセージイベントを処理する
 */
export const handleMessageEvent = async (event: MessageEvent) => {
  if (event.message.type !== "text") {
    return;
  }

  if (event.message.text === "見せて") {
    console.log(links);
    return;
  }

  if (isValidUrl(event.message.text)) {
    links.push(event.message.text);
  }
};
