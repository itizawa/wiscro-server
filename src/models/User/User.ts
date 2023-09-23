import { Schema, model } from "mongoose";

export interface User {
  _id: string;
  username: string;
  email: string;
  profileUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    profileUrl: String,
  },
  { timestamps: true }
);

export const UserModel = model<User>("User", userSchema);
