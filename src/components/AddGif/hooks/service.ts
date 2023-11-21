import axios from "axios";
import { baseUrl } from "../../../constant";
import type { Gif } from "../../../types/GifType";
import type { Tag } from "../../../types/TagType";

const jwt = localStorage.getItem("jwt");

export type DataForCreateGif = {
  title: string;
  description: string;
  tags: Tag["id"];
  url: string;
};

export type getTagsData = {
  data: Tag[];
};
export const getTags = (): Promise<getTagsData> =>
  axios.get(`${baseUrl}/tags`, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });

export const createGif = (data: DataForCreateGif) =>
  axios.post<Gif>(`${baseUrl}/gifs`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt,
    },
  });
