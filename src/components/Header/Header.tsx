import logo from "images/logo.svg";

import {
  HomeHeader,
  InformationHeader,
  LogoHeader,
  RecommendationsTitle,
  WrapperHeader,
} from "./style";
import { HeaderSearch } from "./HeaderSearch";
import { useHeader } from "./hooks/useHeader";
import { NavigationHeader } from "./NavigationHeader";

export function Header() {
  const { isMatches480 } = useHeader();
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
        <HeaderSearch isMatches480={isMatches480} />
        <NavigationHeader />
      </WrapperHeader>
    </>
  );
}
