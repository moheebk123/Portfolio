import chat from "./chat";
import getUser from "./user";
import axios from "axios";

export const api = axios.create({
  baseURL: String(import.meta.env.VITE_BACKEND_API_URL),
  withCredentials: true,
});

export { chat, getUser };
