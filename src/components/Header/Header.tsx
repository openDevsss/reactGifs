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
import logo from "../../images/OBJECTS.svg";
import { MagnifyingGlass } from "phosphor-react";
import HeaderBellIcon from "./HeaderBellIcon";
import { InputAdornment, Tooltip } from "@mui/material";

export function Header() {
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
            <ProfileIcon
              src={
                "https://w.forfun.com/fetch/5c/5c667b51332990f7af3d3b20b4548883.jpeg?w=1470&r=0.5625"
              }
            />
          </MyProfileWrapper>
        </Tooltip>
      </NavigationHeader>
    </WrapperHeader>
  );
}
