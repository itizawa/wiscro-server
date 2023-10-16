import { Schema, Types, model } from "mongoose";

export interface Page {
  _id: Types.ObjectId;
  url: string;
  createdUserId: Types.ObjectId;
  noteId: Types.ObjectId;
  title: string;
  description: string;
  favicon?: string;
  image?: string;
  body?: string;
  summary?: string;
  siteName?: string;
  isFetching: boolean;
}

const schema = new Schema<Page>(
  {
    url: { type: String, required: true },
    createdUserId: { type: Schema.Types.ObjectId, ref: "User" },
    noteId: { type: Schema.Types.ObjectId, ref: "Note" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    favicon: { type: String },
    image: { type: String },
    body: { type: String },
    summary: { type: String },
    siteName: { type: String },
    isFetching: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const PageModel = model<Page>("Page", schema);
