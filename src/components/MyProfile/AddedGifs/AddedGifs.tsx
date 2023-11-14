import { GifProfile } from "./GifProfile";
import { useGetMyGifs } from "./hooks";
import { WrapperInformation, AddedTitle } from "../style";

export const AddedGifs = () => {
  const { data: myGifs } = useGetMyGifs();
  return (
    <WrapperInformation>
      {Boolean(myGifs?.length) ? (
        myGifs?.map((gif) => {
          return <GifProfile key={gif.id} url={gif.url} title={gif.title} />;
        })
      ) : (
        <AddedTitle>Your list with gifs is empty</AddedTitle>
      )}
    </WrapperInformation>
  );
};
