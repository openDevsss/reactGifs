import { Gif } from "../../types/Gif";
import { axiosInstance } from "../../utils/axios-instance";

type DtoEditGif = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export const editGif = (data: DtoEditGif): Promise<Gif> =>
  axiosInstance.patch("/gifs", JSON.stringify(data));
