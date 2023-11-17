import axios from "axios";
import { baseUrl } from "../../../../constant";
import { Gif } from "../../../../types/GifType";

const jwt = localStorage.getItem("jwt");
export const getMyGifs = () =>
  axios.get<Gif[]>(`${baseUrl}/gifs/me`, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
