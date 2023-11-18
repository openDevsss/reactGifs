import axios from "axios";
import { baseUrl } from "../../../constant";
import { Gif } from "../../../types/GifType";
import { Tag } from "../../../types/TagType";

const jwt = localStorage.getItem("jwt");
export const getTags = () =>
  axios.get<Tag[]>(`${baseUrl}/tags`, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
console.log(jwt);
export const postGif = (data: Gif) =>
  axios.post<Gif>(`${baseUrl}/gifs`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt,
    },
  });
