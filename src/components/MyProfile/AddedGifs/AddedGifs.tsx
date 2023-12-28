import React from "react";
import { useGetUserGifs } from "../../UserProfile/hooks/useGetUserGifs";
import { AddedTitle, WrapperInformation } from "../style";
import { GifProfile } from "./GifProfile";

const AddedGifs = () => {
  const { data: gifs } = useGetUserGifs("1");
  return (
    <React.Fragment>
      {Boolean(gifs?.gifs?.length) ? (
        <WrapperInformation>
          {gifs?.gifs?.map((gif) => (
            <GifProfile key={gif.id} url={gif.url} title={gif.title} />
          ))}
        </WrapperInformation>
      ) : (
        <AddedTitle>Your list with gifs is empty</AddedTitle>
      )}
    </React.Fragment>
  );
};

export default AddedGifs;
