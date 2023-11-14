// import { Box } from "@mui/material";
// import { Gif } from "../../../types/GifType";

interface GifProfileProps {
  url: string;
  title: string;
}

export const GifProfile = ({ url, title }: GifProfileProps) => {
  return <img width={"100%"} src={url} alt={title} />;
};
