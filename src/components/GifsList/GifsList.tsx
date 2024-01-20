import { EmptyGifs } from "@components/EmptyGifs/EmptyGifs";
import { GifItem } from "@components/GifItem/GifItem";
import { SkeletonGif } from "@components/Skeleton/SkeletonGif";

import { useGetGifs } from "./hooks/useGetGifs";

export function GifsList() {
  const { data, isFetching } = useGetGifs();
  const skeletonArray = Array.from({ length: 10 });

  return (
    <section>
      {isFetching ? (
        skeletonArray.map((_, index) => <SkeletonGif key={index} />)
      ) : Boolean(data) ? (
        data.map((gif) => <GifItem {...gif} key={gif.id} />)
      ) : (
        <EmptyGifs
          needLink={true}
          message="Your feed is empty, be the first to fill it"
        />
      )}
    </section>
  );
}
