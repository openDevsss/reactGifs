import type { Gif } from "types";
import { axiosInstance } from "utils/axios-instance";

type GetGifData = {
  data: Gif[];
};

export const getGifs = (): Promise<GetGifData> =>
  axiosInstance.get("/gifs").then((res) => res.data);
