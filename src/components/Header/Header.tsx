import { useEffect, useState } from "react";

import {
  IconButton,
  InputAdornment,
  Tooltip,
  useMediaQuery,
} from "@mui/material";

import { List, MagnifyingGlass, SignOut, ThumbsUp } from "phosphor-react";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../features/users/users-selectors";
import { checkAuth, logOut } from "../../features/users/users-slice";
import useAlert from "../../hooks/useAlert";
import logo from "../../images/logo.svg";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit";
import { HeaderBellIcon } from "./HeaderBellIcon";
import { HeaderMenu } from "./HeaderMenu";
import {
  HomeHeader,
  InformationHeader,
  LogoHeader,
  MyProfileWrapper,
  NavigationHeader,
  ProfileIcon,
  ProfileName,
  SearchHeader,
  WrapperHeader,
  WrapperIcon,
} from "./style";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const isMatches1024 = useMediaQuery("(max-width : 1024px)");
  const isMatches480 = useMediaQuery("(max-width : 480px)");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  useEffect(() => {
    if (currentUser) dispatch(checkAuth(currentUser.token));
  }, [currentUser, dispatch]);

  const handleLogout = () => {
    dispatch(logOut());
  };
  const { setAlert } = useAlert();
  return (
    <WrapperHeader>
      <InformationHeader>
        <HomeHeader to="/">
          <LogoHeader
            src={logo}
            onClick={() => setAlert("У вас произошла ошибка", "warning")}
          />
        </HomeHeader>
        <WrapperIcon>
          <HomeHeader to="/recommendations">
            <ThumbsUp size={20} />
          </HomeHeader>
        </WrapperIcon>
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
            }}>
            <MyProfileWrapper to="/my-profile">
              <ProfileName>Account</ProfileName>
              <ProfileIcon src={currentUser?.avatar} />
            </MyProfileWrapper>
          </Tooltip>
          {Boolean(currentUser) && (
            <Link to="/sign-in">
              <WrapperIcon onClick={handleLogout}>
                <SignOut
                  size={20}
                  weight="fill"
                  color="#6f4ff2"
                  cursor="pointer"
                />
              </WrapperIcon>
            </Link>
          )}
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
