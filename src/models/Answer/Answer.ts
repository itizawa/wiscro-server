import { Schema, Types, model } from "mongoose";

export interface Answer {
  url: string;
  createdUserId: Types.ObjectId;
  questionId: Types.ObjectId;
}

const userSchema = new Schema<Answer>(
  {
    url: { type: String, required: true },
    createdUserId: { type: Schema.Types.ObjectId, ref: "User" },
    questionId: { type: Schema.Types.ObjectId, ref: "Question" },
  },
  { timestamps: true },
);

export const AnswerModel = model<Answer>("Answer", userSchema);
