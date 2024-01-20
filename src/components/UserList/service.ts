import { axiosInstance } from "utils/axios-instance";

export const subscribeToUser = (followeeId: string) =>
  axiosInstance.put("/subs/subscribe", { followeeId });
