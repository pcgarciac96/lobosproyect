import dotenv from "dotenv";
dotenv.config();
export default {
  TOKEN_SECRET: '${process.env.JWT_SECRET_KEY}'|| "",
  TOKEN_RESET_PASS: '${process.env.TOKEN_RESET_PASS}' || "",
};
