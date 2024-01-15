import { GifItem } from "components/GifItem/GifItem";
import { SkeletonGif } from "components/Skeleton/SkeletonGif";

import { EmptyGifs } from "../EmptyGifs/EmptyGifs";
import { useGetGifs } from "./hooks/useGetGifs";

export function GifsList() {
  const { data, isLoading } = useGetGifs();
  const skeletonArray = Array.from({ length: 10 });
  if (!data?.length && !isLoading) {
    return (
      <EmptyGifs
        needLink={true}
        message="Your feed is empty, be the first to fill it"
      />
    );
  }
  return (
    <section>
      {isLoading
        ? skeletonArray.map((_, index) => <SkeletonGif key={index} />)
        : Boolean(data) && data.map((gif) => <GifItem {...gif} key={gif.id} />)}
    </section>
  );
}
