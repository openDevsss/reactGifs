import { useState } from "react";
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
import { List, MagnifyingGlass } from "phosphor-react";
import HeaderBellIcon from "./HeaderBellIcon";
import {
  InputAdornment,
  useMediaQuery,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useAppSelector } from "../../redux-toolkit";
import { selectCurrentUser } from "../../features/users/users-selectors";
import HeaderMenu from "./HeaderMenu";
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

  return (
    <WrapperHeader>
      <InformationHeader>
        <LogoHeader src={logo} />
        <TitleHeader>GIFS</TitleHeader>
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
      ) : (
        <>
          <NavigationHeader>
            <HeaderBellIcon />
            <IconButton onClick={handleClick}>
              <List size={32} color="#5f3db5" weight="regular" />
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
