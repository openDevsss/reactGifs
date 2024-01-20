import { Gif } from "types";
import { axiosInstance } from "utils/axios-instance";

export const getGifById = (id: Gif["id"]): Promise<{ data: Gif }> =>
  axiosInstance.get(`/gifs/${id}`).then((res) => res.data);
