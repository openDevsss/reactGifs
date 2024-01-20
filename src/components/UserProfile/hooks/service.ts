import type { User } from "types";
import { axiosInstance } from "utils/axios-instance";

export const GetUserGifs = (id: string): Promise<{ user: User }> =>
  axiosInstance.get(`/users/${id}`).then((res) => res.data);
