import { StepWithSettingsTag } from "./StepWithSettingsTag";
import { StepperSettings } from "./StepperSettings";
import { StyledModal, StyledWrapper } from "./style";

export const SettingsInterestsUser = () => {
  return (
    <StyledModal open>
      <StyledWrapper>
        <StepWithSettingsTag />
        <StepperSettings />
      </StyledWrapper>
    </StyledModal>
  );
};
