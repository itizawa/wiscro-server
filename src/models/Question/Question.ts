import { Schema, model } from "mongoose";

export interface Question {
  title: string;
  description: string;
}

const userSchema = new Schema<Question>(
  {
    title: { type: String, required: true, max: 200 },
    description: { type: String, required: true, max: 3000 },
  },
  { timestamps: true }
);

export const QuestionModel = model<Question>("Question", userSchema);
