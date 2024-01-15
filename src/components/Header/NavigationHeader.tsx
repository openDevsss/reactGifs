import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { List, SignOut } from "@phosphor-icons/react";

import { HeaderBellIcon } from "./HeaderBellIcon";
import {
  MyProfileWrapper,
  NavigationHeaderWrapper,
  ProfileIcon,
  ProfileName,
  WrapperIcon,
} from "./style";
import { HeaderMenu } from "./HeaderMenu";
import { useHeader } from "./hooks/useHeader";

export const NavigationHeader = () => {
  const {
    isOpen,
    anchorEl,
    currentUser,
    isMatches1024,
    handleClick,
    handleClose,
    handleLogout,
  } = useHeader();
  return (
    <div>
      {!isMatches1024 ? (
        <NavigationHeaderWrapper>
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
                currentUser?.token ? `/profile/${currentUser?.id}` : "/sign-in"
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
        </NavigationHeaderWrapper>
      ) : (
        <>
          <NavigationHeaderWrapper>
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
          </NavigationHeaderWrapper>
          <HeaderMenu
            anchorEl={anchorEl}
            handleClose={handleClose}
            isOpen={isOpen}
            handleLogout={handleLogout}
          />
        </>
      )}
    </div>
  );
};
