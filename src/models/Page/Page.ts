import { Schema, model } from "mongoose";

export interface Page {
  url: string;
}

const userSchema = new Schema<Page>({
  url: { type: String, required: true },
});

export const PageModel = model<Page>("Page", userSchema);
