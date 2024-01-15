import { IconButton } from "@mui/material";
import {
  DotsThreeOutlineVertical,
  LinkSimple,
  ShareNetwork,
} from "@phosphor-icons/react";
import { User, Comment } from "types";
import { Comments } from "components/Comments/Comments";

import {
  ContainerGif,
  GifDescription,
  GifHeadInformation,
  GifMenuItem,
  GifUserAvatar,
  GifUserInformation,
  GifUserNickname,
} from "./style";
import { GifMenuAction } from "./GifMenuAction";
import { GifMenuActionProps } from "./type";

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
  return (
    <ContainerGif>
      <>
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
      </>
    </ContainerGif>
  );
};
