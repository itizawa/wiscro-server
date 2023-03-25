import { Schema, model } from "mongoose";

export interface LineUser {
  lineUserId: string;
  displayName: string;
  pictureUrl: string;
  statusMessage: string;
}

const userSchema = new Schema<LineUser>({
  lineUserId: { type: String, required: true, unique: true },
  displayName: { type: String, required: true },
  pictureUrl: String,
  statusMessage: String,
});

export const LineUserModel = model<LineUser>("LineUser", userSchema);
