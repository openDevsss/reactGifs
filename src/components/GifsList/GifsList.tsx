import React from "react";
import { GifsItem } from "../GifsItem/GifsItem";
import { useGetGifs } from "./hooks/hooks";

export function GifsList({}) {
  /* const { data: gifs } = useGetGifs(); */

  return (
    <>
      {/* {gifs?.map((gif) => { */}
        <GifsItem /* key={gif.id} {...gif} */ />
    {/*   })} */}
    </>
  );
}
