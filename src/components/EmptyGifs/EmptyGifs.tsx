import {
  EmptyGifsImage,
  EmptyGifsLink,
  EmptyGifsMessage,
  EmptyGifsWrapper,
} from "./style";
interface EmptyGifsProps {
  message: string;
  needLink?: boolean;
}
export default function EmptyGifs({ message, needLink }: EmptyGifsProps) {
  return (
    <EmptyGifsWrapper>
      <EmptyGifsMessage>{message}</EmptyGifsMessage>
      {/*TODO:оставили url чтобы не было водных знаков */}
      <EmptyGifsImage
        src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?w=1380&t=st=1704754828~exp=1704755428~hmac=ae203df68952c791b2c38b5c9984515791795dfa5dd83c9a621b421d4cbeefae"
        alt=""
      />
      {Boolean(needLink) && (
        <EmptyGifsLink to="/gif-add">Time to add gif</EmptyGifsLink>
      )}
    </EmptyGifsWrapper>
  );
}
