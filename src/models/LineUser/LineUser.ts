import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface LineUser {
  lineUserId: string;
  displayName: string;
  pictureUrl: string;
  statusMessage: string;
}

const userSchema = new Schema<LineUser>({
  lineUserId: { type: String, required: true },
  displayName: { type: String, required: true },
  pictureUrl: String,
  statusMessage: String,
});

export const LineUserModel = model<LineUser>("LineUser", userSchema);
