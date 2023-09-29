import { Schema, Types, model } from "mongoose";

export interface Answer {
  url: string;
  createdUserId: Types.ObjectId;
  questionId: Types.ObjectId;
  title: string;
  description: string;
  favicon?: string;
  image?: string;
  body?: string;
  siteName?: string;
}

const userSchema = new Schema<Answer>(
  {
    url: { type: String, required: true },
    createdUserId: { type: Schema.Types.ObjectId, ref: "User" },
    questionId: { type: Schema.Types.ObjectId, ref: "Question" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    favicon: { type: String },
    image: { type: String },
    body: { type: String },
    siteName: { type: String },
  },
  { timestamps: true },
);

export const AnswerModel = model<Answer>("Answer", userSchema);
