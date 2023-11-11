import { GifItem } from "../GifsItem/GifsItem";
import { useGetGifs } from "./hooks/hooks";

export function GifsList() {
  const { data: gifs } = useGetGifs();

  return (
    <>
      {gifs?.map((gif) => (
        <GifItem key={gif.id} {...gif} />
      ))}
    </>
  );
}
