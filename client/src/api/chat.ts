import { api } from ".";

interface Payload {
  userId: number;
  question: string;
}

export default async function chat(payload: Payload) {
  try {
    const res = await api.post("/chat", payload);
    return res.status === 200 ? res.data : {};
  } catch (error) {
    console.error(error);
    return {};
  }
}
