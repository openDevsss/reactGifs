import { Box } from "@mui/material";
import { User } from "../../types/User";
import { Hashtag } from "../Hashtag/Hashtag";
import {
  MainInfoAvatar,
  MainInfoFollow,
  MainInfoMail,
  MainInfoName,
  MainInfoTagsWrapper,
  MainInfoWrapper,
  PersonalInfoWrapper,
  StyledNumber,
} from "./style";
type MainInfoProps = Pick<
  User,
  "avatar" | "email" | "followers" | "following" | "nickname"
>;
export function MainInformation({
  nickname,
  avatar,
  email,
  followers,
  following,
}: MainInfoProps) {
  return (
    <MainInfoWrapper>
      <MainInfoAvatar src={avatar} />
      <PersonalInfoWrapper>
        <MainInfoName>{nickname}</MainInfoName>
        <MainInfoMail>{email}</MainInfoMail>
        <MainInfoTagsWrapper>
          <Hashtag tag="asasa" />
          <Hashtag tag="asasa" />
          <Hashtag tag="asasa" />
          <Hashtag tag="asasa" />
          <Hashtag tag="asasa" />
          <Hashtag tag="asasa" />
          <Hashtag tag="asasa" />
          <Hashtag tag="asasa" />
          <Hashtag tag="asasa" />
          <Hashtag tag="asasa" />
        </MainInfoTagsWrapper>
        <Box display="flex" alignItems="center" gap="20px" marginTop="10px">
          <MainInfoFollow>
            followers: <StyledNumber>{followers?.length}</StyledNumber>
          </MainInfoFollow>
          <MainInfoFollow>
            following: <StyledNumber>{following?.length}</StyledNumber>
          </MainInfoFollow>
        </Box>
      </PersonalInfoWrapper>
    </MainInfoWrapper>
  );
}
