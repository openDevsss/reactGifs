import {
  WrapperHeader,
  InformationHeader,
  LogoHeader,
  TitleHeader,
  SearchHeader,
  LinkNavigation,
  NavigationHeader,
  MyProfileWrapper,
  ProfileIcon,
  ProfileName,
} from "./styled";
import logo from "../../images/kub.svg";
import { MagnifyingGlass } from "phosphor-react";
import HeaderBellIcon from "./HeaderBellIcon";
import { InputAdornment, Tooltip } from "@mui/material";
import { useAppSelector } from "../../redux-toolkit";
import { selectCurrentUser } from "../../features/users/users-selectors";

export function Header() {
  const currentUser = useAppSelector(selectCurrentUser);
  return (
    <WrapperHeader>
      <InformationHeader>
        <LogoHeader src={logo} />
        <TitleHeader>NFT Logoplace</TitleHeader>
        <SearchHeader
          placeholder="search"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MagnifyingGlass size={18} color="#6F4FF2" />
              </InputAdornment>
            ),
          }}
        />
      </InformationHeader>
      <NavigationHeader>
        <LinkNavigation to="/home">Home</LinkNavigation>
        <LinkNavigation to="/create">Create</LinkNavigation>
        <LinkNavigation to="/my-gifs">MyGIF's</LinkNavigation>
        <HeaderBellIcon />
        <Tooltip
          title="Your profile"
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "black",
                color: "white",
                fontWeight: 700,
                padding: "15px",
                borderRadius: "10px",
              },
            },
          }}
        >
          <MyProfileWrapper to="/my-profile">
            <ProfileName>Account</ProfileName>
            <ProfileIcon src={currentUser?.avatar} />
          </MyProfileWrapper>
        </Tooltip>
      </NavigationHeader>
    </WrapperHeader>
  );
}
