import { MessageEvent } from "@line/bot-sdk";

/**
 * LINEからのメッセージイベントを処理する
 */
export const handleMessageEvent = async (event: MessageEvent) => {
  if (event.message.type !== "text") {
    return;
  }

  console.log("messageきたよ", event.message.text);
};
