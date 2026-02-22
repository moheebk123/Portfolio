import { api } from ".";


export default async function getUser() {
  try {
    const res = await api.get("/check-user");
    return res.status === 200 ? res.data : {};
  } catch (error) {
    console.error(error);
    return {};
  }
}
