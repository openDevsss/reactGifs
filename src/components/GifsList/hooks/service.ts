import axios from "axios";
import { baseUrl } from "../../../constant";
import type { Gif } from "../../../types/GifType";

export const getGifs = () => axios.get<Gif[]>(`${baseUrl}/gifs`);
