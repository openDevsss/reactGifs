import React from "react";
import {
  ContainerFooter,
  ContainerIcons,
  IconFooter,
  LogoFooter,
  PresentationFooter,
  TitleFooter,
  WrapperFooter,
} from "./styled";
import logo from "../../images/kub.svg";
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
          <TitleFooter> Gifs </TitleFooter>
        </PresentationFooter>
        <ContainerIcons>
          <IconFooter src={iconInstagram} />
          <IconFooter src={iconTwitter} />
          <IconFooter src={iconLinkedIn} />
          <IconFooter src={iconYoutebe} />
        </ContainerIcons>
      </ContainerFooter>
    </WrapperFooter>
  );
}
