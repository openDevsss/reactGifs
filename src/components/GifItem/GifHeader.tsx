import { Box, IconButton } from "@mui/material";
import React from "react";
import { DotsThreeOutlineVertical } from "@phosphor-icons/react";
import { User } from "types";

import { GifItemTitle, GifUserAvatar } from "./style";
import { GifMenuAction } from "./GifMenuAction";
import { GifMenuActionProps } from "./type";

interface GifHeaderProps {
  title: string;
  user: User;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}
type CombinedProps = GifHeaderProps & GifMenuActionProps;

export const GifHeader = ({
  anchorEl,
  gifId,
  handleClick,
  handleClose,
  isOpen,
  title,
  user,
}: CombinedProps) => {
  return (
    <Box
      justifyContent="space-between"
      mb="10px"
      display="flex"
      alignItems="center"
    >
      <Box display="flex" gap="15px">
        <GifUserAvatar src={user?.avatar} />
        <GifItemTitle>{title}</GifItemTitle>
      </Box>
      <IconButton onClick={handleClick}>
        <DotsThreeOutlineVertical
          size={17}
          weight="fill"
          color="#6F4FF2"
          cursor="pointer"
        />
      </IconButton>
      <GifMenuAction
        gifId={gifId}
        authorId={user?.id}
        anchorEl={anchorEl}
        handleClose={handleClose}
        isOpen={isOpen}
      />
    </Box>
  );
};
