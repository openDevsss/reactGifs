import { axiosInstance } from "../../utils/axiosInstance";

export const subscribeToUser = (followeeId: string) =>
  axiosInstance.put("/subs/subscribe", { followeeId });
