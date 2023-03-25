import { WebhookRequestBody } from "@line/bot-sdk";
import { Request, Response } from "express";

type LineRequestType = Request<object, object, WebhookRequestBody>;

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
        console.log("follow");
      }
      case "message": {
        console.log("messageきたよ");
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
