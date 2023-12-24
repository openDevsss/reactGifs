import { useGetGifById } from "./hook/useGetGifById";
import { Link, useParams } from "react-router-dom";
import { GifItem } from "../GifsItem/GifItem";
import { ArrowLeft } from "phosphor-react";
import { ButtonBack } from "./style";
import { useNavigate } from "react-router-dom";

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
