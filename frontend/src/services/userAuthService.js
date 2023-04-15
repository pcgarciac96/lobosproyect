import { useToken } from "@/helpers/StoreHelper";
export const saveToken = (token) => useToken(token);

export const isAuth = !!localStorage.getItem("token");
