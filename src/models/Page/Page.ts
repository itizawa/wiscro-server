import { Schema, model } from "mongoose";
import { LineUser } from "../LineUser";

export interface Page {
  url: string;
  title: string;
  description: string;
  favicon?: string;
  image?: string;
  body?: string;
  siteName?: string;
  lineUser: LineUser;
}

const userSchema = new Schema<Page>({
  url: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  favicon: { type: String },
  image: { type: String },
  body: { type: String },
  siteName: { type: String },
  lineUser: { type: Schema.Types.ObjectId, required: true, ref: "lineUser" },
});

export const PageModel = model<Page>("Page", userSchema);
