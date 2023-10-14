import { OpenAI } from "openai";

class OpenaiService {
  openaiClient: OpenAI;
  constructor() {
    this.openaiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async summarize({ text }: { text: string }) {
    const chatCompletion = await this.openaiClient.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `以下の文章を300文字以内で要約してください\n回答は常体で記述してください\n\n${text}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    return chatCompletion;
  }
}

export const openaiService = new OpenaiService();
