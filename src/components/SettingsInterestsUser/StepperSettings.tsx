/* eslint-disable indent */
import { useState } from "react";
import styled from "@emotion/styled";

export const StepperSettings = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };
  const StyledCustomStepper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 20px auto;
  `;

  const StyledStep = styled.div<{ active: boolean }>`
    width: 180px;
    height: 4px;
    border-radius: 7px;
    background-color: ${(props) => (props.active ? "#7552cf" : "#ccc")};
    cursor: pointer;
  `;
  return (
    <StyledCustomStepper>
      {[0, 1, 2].map((stepIndex) => (
        <StyledStep
          key={stepIndex}
          active={activeStep === stepIndex}
          onClick={() => handleStepClick(stepIndex)}
        />
      ))}
    </StyledCustomStepper>
  );
};
