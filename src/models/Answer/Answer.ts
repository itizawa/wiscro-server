import { Schema, Types, model } from "mongoose";

export interface Answer {
  url: string;
  createdUserId: Types.ObjectId;
}

const userSchema = new Schema<Answer>(
  {
    url: { type: String, required: true },
    createdUserId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

export const AnswerModel = model<Answer>("Answer", userSchema);
