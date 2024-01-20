import { Box } from "@mui/material";
import { GifComment } from "components/GifItem/GifComment";
import { GifFooter } from "components/GifItem/GifFooter";
import { GifHeader } from "components/GifItem/GifHeader";
import { GifAnimation } from "components/GifItem/style";
import { useCallback, useState } from "react";
import { Gif } from "types";

import { DetailsGifItemWrapper } from "./style";

export const DetailsGifItem = ({
  id: gifId,
  title,
  user,
  tags,
  description,
  url,
  likes,
  viewers,
  comments,
}: Gif) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setIsOpen(false);
  }, []);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  return (
    <DetailsGifItemWrapper>
      <Box maxWidth="600px" width="100%">
        <GifHeader
          anchorEl={anchorEl}
          gifId={gifId}
          handleClick={handleClick}
          handleClose={handleClose}
          isOpen={isOpen}
          title={title}
          user={user}
          tags={tags}
          description={description}
        />
        <GifAnimation src={url} alt={title} />
        <GifFooter
          gifId={gifId}
          likes={likes}
          viewers={viewers}
          isCommentsOpen={true}
          comments={comments}
        />
      </Box>
      <GifComment
        anchorEl={anchorEl}
        comments={comments}
        description={description}
        gifId={gifId}
        handleClick={handleClick}
        handleClose={handleClose}
        isCommentsOpen={true}
        isOpen={isOpen}
        isWideScreen={true}
        user={user}
      />
    </DetailsGifItemWrapper>
  );
};
