import jwt from "jsonwebtoken";
import config from "../config/config";
import { IPayloadResetPass } from "../interfaces/token.interfaces";
import IUser from "../interfaces/userInterfaces";

export function createToken(payload: IUser) {
  return jwt.sign(
    { user: payload.name, id: payload._id },
    config.TOKEN_SECRET,
    {
      expiresIn: "4h",
    }
  );
}

export async function createTokenResetPass(
  payload: IPayloadResetPass
): Promise<string> {
  return jwt.sign(payload, config.TOKEN_RESET_PASS, {
    expiresIn: "2m",
  });
}
