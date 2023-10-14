import { Schema, Types, model } from "mongoose";

export interface Answer {
  _id: Types.ObjectId;
  url: string;
  createdUserId: Types.ObjectId;
  questionId: Types.ObjectId;
  title: string;
  description: string;
  favicon?: string;
  image?: string;
  body?: string;
  siteName?: string;
  isFetching: boolean;
}

const schema = new Schema<Answer>(
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
    isFetching: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const AnswerModel = model<Answer>("Answer", schema);
