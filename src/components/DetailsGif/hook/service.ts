import { Gif } from "../../../types/Gif";
import { axiosInstance } from "../../../utils/axiosInstance";

export const getGifById = (id: Gif["id"]): Promise<Gif> =>
  axiosInstance.get(`/gifs/${id}`).then((res) => res.data);
