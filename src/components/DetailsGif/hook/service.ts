import axios from "axios";
import { baseUrl } from "../../../constant";
import { Gif } from "../../../types/Gif";

export const getGifById = (id: Gif["id"]): Promise<Gif> =>
  axios.get(`${baseUrl}/gifs/${id}`).then((res) => res.data);
