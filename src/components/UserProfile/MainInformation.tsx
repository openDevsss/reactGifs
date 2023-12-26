import { HashtagProfile } from "./HashtagProfile";
import {
  MainInfoAvatar,
  MainInfoMail,
  MainInfoName,
  MainInfoTagsWrapper,
  MainInfoWrapper,
  PersonalInfoWrapper,
} from "./style";

export function MainInformation() {
  return (
    <MainInfoWrapper>
      <MainInfoAvatar src="https://i.pinimg.com/736x/66/47/e9/6647e94ebc652c4505b493cd6c27f791.jpg" />
      <PersonalInfoWrapper>
        <MainInfoName>Andrey</MainInfoName>
        <MainInfoMail>andrey@,sald.com</MainInfoMail>
        <MainInfoTagsWrapper>
          <HashtagProfile tag="asasa" />
          <HashtagProfile tag="asasa" />
          <HashtagProfile tag="asasa" />
          <HashtagProfile tag="asasa" />
          <HashtagProfile tag="asasa" />
          <HashtagProfile tag="asasa" />
          <HashtagProfile tag="asasa" />
          <HashtagProfile tag="asasa" />
          <HashtagProfile tag="asasa" />
          <HashtagProfile tag="asasa" />
          <HashtagProfile tag="asasa" />
          <HashtagProfile tag="asasa" />
        </MainInfoTagsWrapper>
      </PersonalInfoWrapper>
    </MainInfoWrapper>
  );
}
