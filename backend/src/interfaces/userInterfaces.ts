import { Document } from "mongoose";
export default interface IUser extends Document {
  name: string;
  lastname: string;
  phone: string;
  email: string;
  descripton: string;
  password: string;
}