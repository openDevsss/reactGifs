import { StepWithSetiingsPersonalAccount } from "./StepWithSetiingsPersonalAccount";
// import { StepWithSettingsTag } from "./StepWithSettingsTag";
import { StepperSettings } from "./StepperSettings";
import { StyledModal, StyledSelectedStepWrapper, StyledWrapper } from "./style";

export const SettingsInterestsUser = () => {
  return (
    <StyledModal open>
      <StyledWrapper>
        <StyledSelectedStepWrapper>
          <StepWithSetiingsPersonalAccount />
          {/* <StepWithSettingsTag /> */}
        </StyledSelectedStepWrapper>

        <StepperSettings />
      </StyledWrapper>
    </StyledModal>
  );
};
