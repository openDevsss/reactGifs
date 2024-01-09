import { Box } from "@mui/material";
import { Gear } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { User } from "../../types/User";
import {
  MainInfoAvatar,
  MainInfoFollow,
  MainInfoMail,
  MainInfoName,
  MainInfoWrapper,
  PersonalInfoWrapper,
  StyledNumber,
} from "./style";
type MainInfoProps = Pick<
  User,
  "avatar" | "email" | "followers" | "following" | "nickname" | "id"
>;

function MainInformationSettings() {
  return (
    <Link
      style={{
        width: "20px",
        height: "20px",
      }}
      to="/settings"
    >
      <Gear cursor="pointer" size={20} color="#000" weight="light" />
    </Link>
  );
}
export function MainInformation({
  nickname,
  avatar,
  email,
  followers,
  following,
  id: userId,
}: MainInfoProps) {
  const currentUser = useCurrentUser();
  return (
    <MainInfoWrapper>
      <MainInfoAvatar src={avatar} />
      <PersonalInfoWrapper>
        <div>
          <MainInfoName>{nickname}</MainInfoName>
          <MainInfoMail>
            {email}
            {userId === currentUser?.id && <MainInformationSettings />}
          </MainInfoMail>
        </div>

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
