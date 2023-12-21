import axios from "axios";
import { baseUrl } from "../../constant";

const jwt = localStorage.getItem("jwt");
export type CreateCommentT = {
  comment_text: string;
  gifId: string;
};

type ToggleLikeStateT = {
  gifId: string;
};

export const createComment = ({ comment_text, gifId }: CreateCommentT) =>
  axios.post(`${baseUrl}/comments`, JSON.stringify({ comment_text, gifId }), {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt,
    },
  });

export const toogleLikeState = ({ gifId }: ToggleLikeStateT) => {
  return axios.put(`${baseUrl}/likes`, JSON.stringify({ gifId }), {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt,
    },
  });
};

export const deleteGif = (id: string) =>
  axios.delete(`${baseUrl}/gifs/${id}`, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });

