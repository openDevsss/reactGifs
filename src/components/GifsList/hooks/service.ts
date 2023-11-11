import axios from "axios";
import { baseUrl } from "../../../constant";
import { Gif } from "../../../types/GifType";

// type GetGifsRequest = {
//   data: Gif[];
// };

export const getGifs = () => axios.get<Gif[]>(`${baseUrl}/gifs`);
