import { Gif } from "../../types/Gif";
import { Tag } from "../../types/Tag";
import { axiosInstance } from "../../utils/axiosInstance";

type EditGifT = {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
};

export const EditGif = (data: EditGifT): Promise<Gif> =>
  axiosInstance.patch("/gifs", JSON.stringify(data));
