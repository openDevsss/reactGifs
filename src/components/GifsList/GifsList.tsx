import { GifItem } from "../GifsItem/GifsItem";
import { Loader } from "../Loader/Loader";
import { useGetGifs } from "./hooks/useGetGifs";

export function GifsList() {
  const { data: gifs, isLoading } = useGetGifs();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        gifs?.map((gif) => <GifItem key={gif.id} {...gif} />)
      )}
    </>
  );
}
