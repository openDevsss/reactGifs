import { Gif } from "../../types/Gif";
import { axiosInstance } from "../../utils/axiosInstance";

type EditGifT = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export const editGif = (data: EditGifT): Promise<Gif> =>
  axiosInstance.patch("/gifs", JSON.stringify(data));
