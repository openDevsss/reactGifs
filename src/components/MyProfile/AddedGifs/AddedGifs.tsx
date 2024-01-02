import React from "react";
import { useGetUserGifs } from "../../UserProfile/hooks/useGetUserGifs";
import { AddedTitle, WrapperInformation } from "../style";
import { GifProfile } from "./GifProfile";
type AddedGifsProps = {
  id: string;
};
export const AddedGifs = ({ id }: AddedGifsProps) => {
  const { data } = useGetUserGifs(id);
  return (
    <React.Fragment>
      {Boolean(data?.gifs?.length) ? (
        <WrapperInformation>
          {data.gifs.map((gif) => (
            <GifProfile key={gif.id} url={gif.url} title={gif.title} />
          ))}
        </WrapperInformation>
      ) : (
        <AddedTitle>Your list with gifs is empty</AddedTitle>
      )}
    </React.Fragment>
  );
};
