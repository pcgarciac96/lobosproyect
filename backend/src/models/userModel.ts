import { Schema, model } from "mongoose";
import IUser from "../interfaces/userInterfaces";
const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String },
    description: { type: String, trim: true },
    password: { type: String },
    email: { type: String, required: true },
  },
  {
    timestamps: {
      currentTime: () =>
        new Date().getTime() - new Date().getTimezoneOffset() * 60000,
    },
  }
);

export default model<IUser>("User", userSchema);
