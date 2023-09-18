import { Schema, model } from "mongoose";

export interface Question {
  title: string;
  description: string;
}

const userSchema = new Schema<Question>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const QuestionModel = model<Question>("Question", userSchema);
