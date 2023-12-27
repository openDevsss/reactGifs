import type { Gif } from "../../../types/Gif";
import type { Tag } from "../../../types/Tag";
import { axiosInstance } from "../../../utils/axiosInstance";

export type DataForCreateGif = {
  title: string;
  description: string;
  tags: Tag["id"];
  url: string;
};

export type getTagsData = {
  data: Tag[];
};
export const getTags = (): Promise<getTagsData> => axiosInstance.get("/tags");

export const createGif = (data: DataForCreateGif) =>
  axiosInstance.post<Gif>("/gifs", JSON.stringify(data));
