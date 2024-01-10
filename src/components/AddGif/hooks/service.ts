import type { Gif } from "../../../types/Gif";
import type { Tag } from "../../../types/Tag";
import { axiosInstance } from "../../../utils/axiosInstance";

export type DataForCreateGif = {
  title: string;
  description: string;
  tags: Tag["id"];
  url: string;
};

export const createGif = (data: DataForCreateGif): Promise<Gif> =>
  axiosInstance.post("/gifs", JSON.stringify(data));
