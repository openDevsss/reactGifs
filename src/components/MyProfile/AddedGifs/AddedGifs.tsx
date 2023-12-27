import React from "react";
import { AddedTitle, WrapperInformation } from "../style";
import { GifProfile } from "./GifProfile";
import { useGetMyGifs } from "./hooks/useGetMyGifs";

const AddedGifs = () => {
  const { data: myGifs } = useGetMyGifs();

  return (
    <React.Fragment>
      {myGifs?.length ? (
        <WrapperInformation>
          {myGifs?.map((gif) => (
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
