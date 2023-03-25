import { WebhookRequestBody } from "@line/bot-sdk";
import { Request, Response } from "express";
import { UpsertLineUserUseCase } from "~/useCases/LineUser/UpsertLineUserUseCase";
import { handleMessageEvent } from "./handleMessageEvent";

type LineRequestType = Request<object, object, WebhookRequestBody>;

const upsertLineUserUseCase = new UpsertLineUserUseCase();

/**
 * LINEからのリクエストをハンドルする関数
 * @param req
 * @param res
 * @returns
 */
export const handleLineRequest = async (
  req: LineRequestType,
  res: Response
) => {
  const asyncJobs = req.body.events.map(async (event) => {
    if (event.source.type === "room") return;

    switch (event.type) {
      case "follow": {
        if (event.source.type === "user") {
          await upsertLineUserUseCase.execute(event.source.userId);
        }
        return;
      }
      case "message": {
        await handleMessageEvent(event);
        return;
      }
    }
  });

  try {
    await Promise.all(asyncJobs);
    return res.status(200).json({ res: "ok" });
  } catch (error) {
    return res.status(503).json({ message: "予期せぬエラーが発生しました" });
  }
};
