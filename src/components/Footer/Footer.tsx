import React from "react";
import {
  ContainerFooter,
  ContainerIcons,
  DescriptionFooter,
  IconFooter,
  Line,
  LinkFooter,
  LinkNavigation,
  LogoFooter,
  NavigationFooter,
  PresentationFooter,
  TitleFooter,
  TytleExploreFooter,
  WrapperFooter,
} from "./styled";
import logo from "../../images/OBJECTS.svg";
import iconTwitter from "../../images/Twit.svg";
import iconLinkedIn from "../../images/Linked.svg";
import iconYoutebe from "../../images/Youtube.svg";
import iconInstagram from "../../images/Insta.svg";

export function Footer() {
  return (
    <WrapperFooter>
      <ContainerFooter>
        <PresentationFooter>
          <LogoFooter src={logo} />
          <TitleFooter> React Gifs </TitleFooter>
        </PresentationFooter>
        <ContainerIcons>
          <IconFooter src={iconInstagram} />
          <IconFooter src={iconTwitter} />
          <IconFooter src={iconLinkedIn} />
          <IconFooter src={iconYoutebe} />
        </ContainerIcons>
      </ContainerFooter>
      <Line />
      <NavigationFooter>
        <DescriptionFooter>Find your gifs</DescriptionFooter>
        <LinkFooter>
          <TytleExploreFooter>Explore</TytleExploreFooter>
          <LinkNavigation to="/home">Home</LinkNavigation>
          <LinkNavigation to="/create">Create</LinkNavigation>
          <LinkNavigation to="/my-gifs">MyGIF's</LinkNavigation>
        </LinkFooter>
        <LinkFooter>
          <TytleExploreFooter>Link</TytleExploreFooter>
          <LinkNavigation to="/blog">Blog</LinkNavigation>
          <LinkNavigation to="/contact">Contact</LinkNavigation>
          <LinkNavigation to="/faq">FAQ`s</LinkNavigation>
          <LinkNavigation to="/about-us">About us</LinkNavigation>
        </LinkFooter>
      </NavigationFooter>
    </WrapperFooter>
  );
}
