import {
  StyledStepLabel,
  StyledTextArea,
  StyledTextField,
  StyledTitleStep,
  StyledWrapperTextField,
  WrapperForTextFieldAndLabel,
} from "./style";

export const StepWithSetiingsPersonalAccount = () => {
  return (
    <>
      <StyledTitleStep>Settings Your Account</StyledTitleStep>

      <StyledWrapperTextField>
        <WrapperForTextFieldAndLabel>
          <StyledStepLabel>Full name</StyledStepLabel>
          <StyledTextField
            id="outlined-basic"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </WrapperForTextFieldAndLabel>
        <WrapperForTextFieldAndLabel>
          <StyledStepLabel>Last name</StyledStepLabel>
          <StyledTextField
            id="outlined-basic"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </WrapperForTextFieldAndLabel>
        <WrapperForTextFieldAndLabel>
          <StyledStepLabel>Phone</StyledStepLabel>
          <StyledTextField
            id="outlined-basic"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </WrapperForTextFieldAndLabel>
        <WrapperForTextFieldAndLabel>
          <StyledStepLabel>Location</StyledStepLabel>
          <StyledTextField
            id="outlined-basic"
            variant="outlined"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </WrapperForTextFieldAndLabel>
        <WrapperForTextFieldAndLabel>
          <StyledStepLabel>Bio</StyledStepLabel>
          <StyledTextArea
            id="standard-multiline-flexible"
            multiline
            maxRows={6}
            variant="outlined"
            inputProps={{ min: 0, style: { alignSelf: "start" } }}
          />
        </WrapperForTextFieldAndLabel>
      </StyledWrapperTextField>
    </>
  );
};
