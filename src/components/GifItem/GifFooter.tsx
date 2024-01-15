import { Box, Typography } from "@mui/material";
import { Chat, Eye, ShareFat } from "@phosphor-icons/react";
import { LikeTooltip } from "components/LikeTooltip/LikeTooltip";
import { configModalName } from "constant";
import { useModal } from "hooks/useModal";
import { Gif, Like } from "types";
import { UserList } from "components/UserList/UserList";

import { StyledWrapperIconGif } from "./style";

interface GifFooterProps {
  gifId: string;
  likes: Like[];
  viewers: Gif["viewers"];
  isCommentsOpen: boolean;
  setIsCommentsOpen: (flag: boolean) => void;
}

export const GifFooter = ({
  gifId,
  likes,
  viewers,
  setIsCommentsOpen,
  isCommentsOpen,
}: GifFooterProps) => {
  const { modals, toggleModal } = useModal();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="10px 0"
    >
      <Box maxWidth="600px" display="flex" alignItems="center" gap="25px">
        <LikeTooltip
          gifId={gifId}
          setIsOpenUserList={toggleModal}
          likes={likes}
        />
        {Boolean(modals[configModalName.likes]) && (
          <UserList
            open={Boolean(modals[configModalName.likes])}
            onClose={() => toggleModal(configModalName.likes)}
            users={likes?.map(({ user }) => user)}
          />
        )}
        <StyledWrapperIconGif
          onClick={() => setIsCommentsOpen(!isCommentsOpen)}
        >
          <Chat size="24" weight="thin" cursor="pointer" />
        </StyledWrapperIconGif>
        <StyledWrapperIconGif>
          <ShareFat size="24" weight="thin" cursor="pointer" />
        </StyledWrapperIconGif>
      </Box>
      <Box display="flex" alignItems="center" gap="10px">
        <Eye size={20} weight="thin" />
        <Typography>{viewers}</Typography>
      </Box>
    </Box>
  );
};