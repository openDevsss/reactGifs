import { GifItem } from "../GifItem/GifItem";
import { useGetGifs } from "./hooks/useGetGifs";

export function GifsList() {
  const { data } = useGetGifs();
  return (
    <>
      {Boolean(data) && data?.map((gif) => <GifItem key={gif.id} {...gif} />)}
    </>
  );
}
