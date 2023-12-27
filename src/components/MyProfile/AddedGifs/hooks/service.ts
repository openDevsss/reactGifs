import type { Gif } from "../../../../types/Gif";
import { axiosInstance } from "../../../../utils/axiosInstance";

type GetMyGifsData = {
  data: Gif[];
};
export const getMyGifs = () =>
  axiosInstance.get<GetMyGifsData>("/gifs/me").then((res) => res.data);
