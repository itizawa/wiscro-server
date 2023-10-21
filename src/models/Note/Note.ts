import { Schema, Types, model } from "mongoose";

export interface Note {
  title: string;
  description: string;
  createdUserId: Types.ObjectId;
  latestPageId: Types.ObjectId;
  latestPostPageAt?: Date;
}

const userSchema = new Schema<Note>(
  {
    title: { type: String, required: true, max: 200 },
    description: { type: String, required: true, max: 3000 },
    createdUserId: { type: Schema.Types.ObjectId, ref: "User" },
    latestPageId: { type: Schema.Types.ObjectId, ref: "Page" },
    latestPostPageAt: { type: Date },
  },
  { timestamps: true },
);

export const NoteModel = model<Note>("Note", userSchema);
