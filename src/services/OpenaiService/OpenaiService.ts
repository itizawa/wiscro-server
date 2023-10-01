import { OpenAI } from "openai";

class OpenaiService {
  openaiClient: OpenAI;
  constructor() {
    this.openaiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async execute() {
    const chatCompletion = await this.openaiClient.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });

    return chatCompletion;
  }
}

export const openaiService = new OpenaiService();
