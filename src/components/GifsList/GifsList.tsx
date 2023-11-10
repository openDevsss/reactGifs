import { GifsItem } from "../GifsItem/GifsItem";

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
