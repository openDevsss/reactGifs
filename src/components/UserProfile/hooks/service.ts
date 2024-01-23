import { User } from "types/User";
import { axiosInstance } from "utils/axiosInstance";

export const GetUserGifs = (id: string): Promise<{ user: User }> =>
  axiosInstance.get(`/users/${id}`).then((res) => res.data);
