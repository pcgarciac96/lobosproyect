const url = "http://localhost:3000/api/";

import axios from "axios";

export const api = axios.create({
  baseURL: url,
  // timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
