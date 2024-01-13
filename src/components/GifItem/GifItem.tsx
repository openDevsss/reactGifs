/* eslint-disable indent */
import { Box, useMediaQuery } from "@mui/material";
import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { useActionWithGifs } from "hooks/useActionWithGifs";
import type { Gif } from "types";

import { GifAnimation, GifItemWrapper } from "./style";
import { GifComment } from "./GifComment";
import { GifFooter } from "./GifFooter";
import { GifHeader } from "./GifHeader";

export function GifItem({
  title,
  description,
  url,
  user,
  comments,
  id: gifId,
  viewers,
  likes,
}: Gif) {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { navigate, isCommentsOpen } = useActionWithGifs();
  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setIsOpen(false);
  }, []);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };
  const location = useLocation();
  const handleNavigateToDetails = (gifId: string) => {
    if (location.pathname !== `/gif/${gifId}`) navigate(`/gif/${gifId}`);
  };
  const isWideScreen = useMediaQuery("(min-width:1200px)");
  return (
    <GifItemWrapper isCommentsOpen={isCommentsOpen}>
      <Box maxWidth="600px" width="100%">
        {!isCommentsOpen && (
          <GifHeader
            anchorEl={anchorEl}
            gifId={gifId}
            handleClick={handleClick}
            handleClose={handleClose}
            isOpen={isOpen}
            title={title}
            user={user}
          />
        )}
        <GifAnimation
          src={url}
          alt={title}
          onClick={() => handleNavigateToDetails(gifId)}
        />
        <GifFooter gifId={gifId} likes={likes} viewers={viewers} />
      </Box>
      {isCommentsOpen && (
        <GifComment
          anchorEl={anchorEl}
          comments={comments}
          description={description}
          gifId={gifId}
          handleClick={handleClick}
          handleClose={handleClose}
          isCommentsOpen={isCommentsOpen}
          isOpen={isOpen}
          isWideScreen={isWideScreen}
          user={user}
        />
      )}
    </GifItemWrapper>
  );
}
