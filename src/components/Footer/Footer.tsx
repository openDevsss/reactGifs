import iconInstagram from "../../images/Insta.svg";
import logo from "../../images/logo.svg";
import iconLinkedIn from "../../images/Linked.svg";
import iconTwitter from "../../images/Twit.svg";
import iconYoutebe from "../../images/Youtube.svg";
import {
  ContainerFooter,
  ContainerIcons,
  IconFooter,
  LogoFooter,
  PresentationFooter,
  TitleFooter,
  WrapperFooter,
} from "./style";

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
