import { IconButton, InputAdornment, Tooltip } from "@mui/material";
import { List, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import logo from "images/logo.svg";
import { Link } from "react-router-dom";

import { HeaderBellIcon } from "./HeaderBellIcon";
import { HeaderMenu } from "./HeaderMenu";
import { useHeader } from "./hooks/useHeader";
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

export function Header() {
  const {
    isOpen,
    anchorEl,
    currentUser,
    isMatches1024,
    isMatches480,
    handleClick,
    handleClose,
    handleLogout,
  } = useHeader();
  return (
    <>
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
            <Tooltip
              title="Notification"
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
              <div>
                <HeaderBellIcon />
              </div>
            </Tooltip>
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
              <MyProfileWrapper
                to={
                  currentUser?.token
                    ? `/profile/${currentUser?.id}`
                    : "/sign-in"
                }
              >
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
              <Tooltip
                title="Notification"
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
                <HeaderBellIcon />
              </Tooltip>
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
    </>
  );
}
