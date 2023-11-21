import axios from "axios";
import { baseUrl } from "../../../../constant";
import type { Gif } from "../../../../types/GifType";

const jwt = localStorage.getItem("jwt");
type GetMyGifsData = {
  data: Gif[];
};
export const getMyGifs = () =>
  axios
    .get<GetMyGifsData>(`${baseUrl}/gifs/me`, {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    })
    .then((res) => res.data);
