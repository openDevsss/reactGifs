import { useEffect, useState } from "react";
import {
  InputAdornment,
  useMediaQuery,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit";
import { selectCurrentUser } from "../../features/users/users-selectors";
import HeaderMenu from "./HeaderMenu";
import { checkAuth } from "../../features/users/users-slice";
import {
  InformationHeader,
  LogoHeader,
  MyProfileWrapper,
  NavigationHeader,
  ProfileIcon,
  ProfileName,
  HomeHeader,
  WrapperIcons,
} from "./styled";
import logo from "../../images/kub.svg";
import { List, MagnifyingGlass, SignOut } from "phosphor-react";
import HeaderBellIcon from "./HeaderBellIcon";

import { SearchHeader, TitleHeader, WrapperHeader } from "./styled";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };
  const currentUser = useAppSelector(selectCurrentUser);
  const isMatches1024 = useMediaQuery("(max-width : 1024px)");
  const isMatches480 = useMediaQuery("(max-width : 480px)");

  const dispatch = useAppDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) dispatch(checkAuth(jwt));
  }, [jwt, dispatch]);

  return (
    <WrapperHeader>
      <InformationHeader>
        <LogoHeader src={logo} />
        <TitleHeader>GIFS</TitleHeader>
        <HomeHeader to="/"> Home </HomeHeader>
        <HomeHeader to="/recommendations"> Recommendations </HomeHeader>
        {!isMatches480 && (
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
        )}
      </InformationHeader>
      {!isMatches1024 ? (
        <NavigationHeader>
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
          <WrapperIcons>
            <SignOut
              size={20}
              weight="fill"
              color="#6f4ff2"
              cursor={"pointer"}
            />
          </WrapperIcons>
        </NavigationHeader>
      ) : (
        <>
          <NavigationHeader>
            <HeaderBellIcon />
            <IconButton onClick={handleClick}>
              <List size={20} color="#5f3db5" weight="regular" />
            </IconButton>
          </NavigationHeader>
          <HeaderMenu
            anchorEl={anchorEl}
            handleClose={handleClose}
            isOpen={isOpen}
          />
        </>
      )}
    </WrapperHeader>
  );
}
