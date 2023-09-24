import { Schema, Types, model } from "mongoose";

export interface Question {
  title: string;
  description: string;
  createdUserId: Types.ObjectId;
}

const userSchema = new Schema<Question>(
  {
    title: { type: String, required: true, max: 200 },
    description: { type: String, required: true, max: 3000 },
    createdUserId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

export const QuestionModel = model<Question>("Question", userSchema);
