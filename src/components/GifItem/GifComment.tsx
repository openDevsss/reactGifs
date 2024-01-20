import { IconButton } from "@mui/material";
import {
  DotsThreeOutlineVertical,
  LinkSimple,
  ShareNetwork,
} from "@phosphor-icons/react";
import { Comments } from "@components/Comments/Comments";
import { useModal } from "@hooks/useModal";

import { GifMenuAction } from "./GifMenuAction";
import {
  ContainerGif,
  GifDescription,
  GifHeadInformation,
  GifMenuItem,
  GifUserAvatar,
  GifUserInformation,
  GifUserNickname,
} from "./style";
import { GifMenuActionProps } from "./type";
import { User } from "types/User";

interface GifCommentProps {
  isWideScreen: boolean;
  isCommentsOpen: boolean;
  description: string;
  user: User;
  comments: Comment[];
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

type CombinedProps = GifCommentProps & GifMenuActionProps;

export const GifComment = ({
  isWideScreen,
  user,
  comments,
  description,
  isCommentsOpen,
  handleClick,
  anchorEl,
  gifId,
  handleClose,
  isOpen,
}: CombinedProps) => {
  const { toggleModal } = useModal();
  return (
    <ContainerGif>
      <div>
        {Boolean(isWideScreen) && (
          <GifHeadInformation>
            <GifUserInformation>
              <GifUserAvatar src={user.avatar} />
              <GifUserNickname>{user.nickname}</GifUserNickname>
            </GifUserInformation>
            <GifMenuItem>
              <IconButton>
                <ShareNetwork
                  size={17}
                  weight="fill"
                  color="#6F4FF2"
                  cursor="pointer"
                />
              </IconButton>
              <IconButton>
                <LinkSimple
                  size={17}
                  weight="bold"
                  color="#6F4FF2"
                  cursor="pointer"
                />
              </IconButton>
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
                setIsOpenEditModal={toggleModal}
              />
            </GifMenuItem>
          </GifHeadInformation>
        )}

        <GifDescription>{description}</GifDescription>
      </div>
      <Comments
        isCommentsOpen={isCommentsOpen}
        comments={comments}
        gifId={gifId}
      />
    </ContainerGif>
  );
};
