import { axiosInstance } from "@utils/axiosInstance";

export type CreateCommentT = {
  comment_text: string;
  gifId: string;
};

type ToggleLikeStateT = {
  gifId: string;
};

export const createComment = ({ comment_text, gifId }: CreateCommentT) =>
  axiosInstance.post("/comments", JSON.stringify({ comment_text, gifId }));

export const toogleLikeState = ({ gifId }: ToggleLikeStateT) => {
  return axiosInstance.put("/likes", JSON.stringify({ gifId }));
};

export const deleteGif = (id: string) => axiosInstance.delete(`/gifs/${id}`);
