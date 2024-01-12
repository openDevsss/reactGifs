<<<<<<< HEAD
import axios from "axios";
import { baseUrl } from "../../../constant/baseUrl";
import type { Gif } from "../../../types/Gif";
import type { Tag } from "../../../types/Tag";
import { axiosInstance } from "../../../utils/axiosInstance";
=======
import { Gif } from "types/Gif";
import { Tag } from "types/Tag";
import { axiosInstance } from "utils/axiosInstance";
>>>>>>> parent of 778ea42 (Revert "KAN-73 Импорты eslint")

export type DataForCreateGif = {
  title: string;
  description: string;
  tags: Tag["id"];
  url?: string;
};

export type getTagsData = {
  data: Tag[];
};
export const getTags = (): Promise<getTagsData> => axiosInstance.get("/tags");

export const createGif = (data: DataForCreateGif): Promise<Gif> =>
  axiosInstance.post("/gifs", JSON.stringify(data));

export const uploadGif = (data: any) => axios.post(`${baseUrl}/upload`, data);
