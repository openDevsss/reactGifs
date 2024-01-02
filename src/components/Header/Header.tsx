import { useEffect, useState } from "react";

import {
  AppBar,
  IconButton,
  InputAdornment,
  Slide,
  Toolbar,
  Tooltip,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";

import { List, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../features/users/users-selectors";
import { checkAuth, logOut } from "../../features/users/users-slice";
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
  RecommendationsTitle,
  SearchHeader,
  WrapperHeader,
  WrapperIcon,
  WrapperSearch,
} from "./style";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

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
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) dispatch(checkAuth(jwt));
  }, [jwt, dispatch]);

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <HideOnScroll>
        <AppBar sx={{ backgroundColor: "white", position: "sticky" }}>
          <Toolbar>
            <WrapperHeader>
              <InformationHeader>
                <HomeHeader to="/">
                  <LogoHeader src={logo} />
                </HomeHeader>
                <HomeHeader to="/recommendations">
                  <RecommendationsTitle>Recommendations</RecommendationsTitle>
                </HomeHeader>
              </InformationHeader>
              <WrapperSearch>
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
              </WrapperSearch>
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
                    handleLogout={handleLogout}
                  />
                </>
              )}
            </WrapperHeader>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
