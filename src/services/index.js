import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://paul.blueboxonline.com/api/v1",
  timeout: 10000,
});

export { appApi } from "./app";
export { authApi } from "./auth";
