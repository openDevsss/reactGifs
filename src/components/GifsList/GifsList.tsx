import EmptyGifs from "../EmptyGifs/EmptyGifs";
import { GifItem } from "../GifItem/GifItem";
import { useGetGifs } from "./hooks/useGetGifs";

export function GifsList() {
  const { data } = useGetGifs();
  if (!data?.length) {
    return (
      <EmptyGifs
        needLink={true}
        message="Your feed is empty, be the first to fill it"
      />
    );
  }

  return (
    <>
      {Boolean(data) && data?.map((gif) => <GifItem key={gif.id} {...gif} />)}
    </>
  );
}
