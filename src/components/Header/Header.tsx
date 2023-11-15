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
import { checkAuth, logOut } from "../../features/users/users-slice";
import {
  InformationHeader,
  MyProfileWrapper,
  NavigationHeader,
  ProfileIcon,
  ProfileName,
  HomeHeader,
  WrapperIcon,
  SearchHeader,
  WrapperHeader,
} from "./style";
import {
  Gif,
  House,
  List,
  MagnifyingGlass,
  SignOut,
  ThumbsUp,
} from "phosphor-react";
import HeaderBellIcon from "./HeaderBellIcon";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const isMatches1024 = useMediaQuery("(max-width : 1024px)");
  const isMatches480 = useMediaQuery("(max-width : 480px)");
  const jwt = localStorage.getItem("jwt");
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };
  useEffect(() => {
    if (jwt) dispatch(checkAuth(jwt));
  }, [jwt, dispatch]);
  // TODO: нужна логика для редиректа
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <WrapperHeader>
      <InformationHeader>
        <HomeHeader to="/">
          <Gif size={50} color="#6f4ff2" weight="duotone" />
        </HomeHeader>
        <WrapperIcon>
          <HomeHeader to="/">
            <House size={20} />
          </HomeHeader>
        </WrapperIcon>
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
          />
        </>
      )}
    </WrapperHeader>
  );
}
