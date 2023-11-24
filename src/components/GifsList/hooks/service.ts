import axios from "axios";
import { baseUrl } from "../../../constant";
import type { Gif } from "../../../types/Gif";

type GetGifData = {
  data: Gif[];
};

export const getGifs = (): Promise<GetGifData> =>
  axios.get(`${baseUrl}/gifs`).then((res) => res.data);
