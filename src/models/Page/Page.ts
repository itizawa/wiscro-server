import { Schema, model } from "mongoose";

export interface Page {
  url: string;
  title: string;
  description: string;
  favicon?: string;
  image?: string;
  body?: string;
  siteName?: string;
}

const userSchema = new Schema<Page>({
  url: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  favicon: { type: String },
  image: { type: String },
  body: { type: String },
  siteName: { type: String },
});

export const PageModel = model<Page>("Page", userSchema);
