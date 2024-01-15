import axios from "axios";
import { baseUrl } from "constant";
import type { Gif, Tag } from "types";
import { axiosInstance } from "utils/axiosInstance";

export type DataForCreateGif = {
  title: string;
  description: string;
  tags: Tag["id"];
  url?: string;
};

export const createGif = (data: DataForCreateGif): Promise<Gif> =>
  axiosInstance.post("/gifs", JSON.stringify(data));

export const uploadGif = (data: any) => axios.post(`${baseUrl}/upload`, data);
