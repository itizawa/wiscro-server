import { MessageEvent } from "@line/bot-sdk";
import { FetchAndSavePageUseCase } from "~/useCases/Page/FetchAndSavePageUseCase";
import { isValidUrl } from "~/utils/isValidUrl";

const fetchAndSavePageUseCase = new FetchAndSavePageUseCase();

/**
 * LINEからのメッセージイベントを処理する
 */
export const handleMessageEvent = async (event: MessageEvent) => {
  if (event.message.type !== "text") {
    return;
  }

  if (isValidUrl(event.message.text)) {
    await fetchAndSavePageUseCase.execute(event.message.text);
  }
};
