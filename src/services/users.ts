import { api } from "../utils";

const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error(`[ERROR] getUsers`, error);
    return [];
  }
};

export { getUsers };
