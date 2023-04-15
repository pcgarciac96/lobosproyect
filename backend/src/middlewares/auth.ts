import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";
import responseMessage from "../utils/responseMessage";
async function verifyToken(req: Request, res: Response, next: NextFunction) {
  try {
    const token: any = req.headers.accesstoken;
    if (!token) {
      return res.status(401).json(responseMessage.withoutAuthenticationHeader);
    }
    const payload = jwt.verify(token, config.TOKEN_SECRET);
    next();
  } catch (e) {
    return res.status(400).json(responseMessage.invalidToken);
  }
}

async function verifyTokenResetPass(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token: any = req.headers.resettoken;
    if (!token) {
      return res.status(401).json(responseMessage.expiredInvalidToken);
    }
    const payload = jwt.verify(token, config.TOKEN_RESET_PASS);
    next();
  } catch (e) {
    return res.status(400).json(responseMessage.expiredInvalidToken);
  }
}

export { verifyToken, verifyTokenResetPass };
