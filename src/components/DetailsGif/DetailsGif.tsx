import { ArrowLeft } from "@phosphor-icons/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GifItem } from "../GifItem/GifItem";
import { useGetGifById } from "./hook/useGetGifById";
import { ButtonBack } from "./style";

export function DetailsGif() {
  const { id } = useParams();
  const { data: gif } = useGetGifById(id as string);

  const navigate = useNavigate();

  return (
    <>
      <Link to="/">
        <ButtonBack onClick={() => navigate(-1)} variant="outlined">
          <ArrowLeft size={24} color="#6f4ff2" />
        </ButtonBack>
      </Link>
      {gif && <GifItem {...gif} />}
    </>
  );
}
