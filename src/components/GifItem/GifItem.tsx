/* eslint-disable indent */
import { useActionWithGifs } from "@hooks/useActionWithGifs";
import { Box, useMediaQuery } from "@mui/material";
import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

import { Gif } from "types/Gif";
import { GifComment } from "./GifComment";
import { GifFooter } from "./GifFooter";
import { GifHeader } from "./GifHeader";
import { GifAnimation, GifItemWrapper } from "./style";

export function GifItem({
  title,
  description,
  url,
  user,
  comments,
  id: gifId,
  viewers,
  likes,
  tags,
}: Gif) {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { navigate, isCommentsOpen, setIsCommentsOpen } = useActionWithGifs();
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
            tags={tags}
            description={description}
          />
        )}

        <GifAnimation
          src={url}
          alt={title}
          onClick={() => handleNavigateToDetails(gifId)}
        />
        <GifFooter
          gifId={gifId}
          likes={likes}
          viewers={viewers}
          setIsCommentsOpen={setIsCommentsOpen}
          isCommentsOpen={isCommentsOpen}
          comments={comments}
        />
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
