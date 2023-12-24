import type { Gif } from "../../../types/Gif";
import { axiosInstance } from "../../../utils/axiosInstance";

type GetGifData = {
  data: Gif[];
};

export const getGifs = (): Promise<GetGifData> =>
  axiosInstance.get(`/gifs`).then((res) => res.data);
