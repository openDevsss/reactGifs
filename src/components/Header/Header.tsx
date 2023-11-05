import React, { useState } from "react";

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
import HeaderMenu from "./HeaderMenu";
import { InputAdornment } from "@mui/material";

export function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <MyProfileWrapper onClick={handleClick}>
          <ProfileName>Account</ProfileName>
          <ProfileIcon
            src={
              "https://w.forfun.com/fetch/5c/5c667b51332990f7af3d3b20b4548883.jpeg?w=1470&r=0.5625"
            }
          />
          {isOpen && (
            <HeaderMenu
              anchorEl={anchorEl}
              handleClose={handleClose}
              isOpen={isOpen}
            />
          )}
        </MyProfileWrapper>
      </NavigationHeader>
    </WrapperHeader>
  );
}
