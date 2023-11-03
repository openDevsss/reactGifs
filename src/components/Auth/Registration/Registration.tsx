import React from "react";
import {
  Title,
  Section,
  Description,
  Wrapper,
  Form,
  WhiteBorderTextField,
  FormLegend,
  ButtonSubmit,
  InstructionText,
  LogInLink,
  WrapperImage,
  RedirectText,
} from "../AuthStyled";
import ghost from "../../../images/stickerGhost.webp";
import { Box, Typography } from "@mui/material";

export function Registration() {
  return (
    <Section>
      <Wrapper>
        <Form>
          <FormLegend>sign in</FormLegend>
          <InstructionText>Welcome! Please enter your details.</InstructionText>
          <Description>Email</Description>
          <WhiteBorderTextField size="small" placeholder="Enter your email" />
          <Description>Password</Description>
          <WhiteBorderTextField
            size="small"
            placeholder="Enter your password"
          />
          <ButtonSubmit>sign in</ButtonSubmit>
          <RedirectText>
            Don't have an account?
            <LogInLink>
              <Typography component="span" > Sign up </Typography>
            </LogInLink>
          </RedirectText>
        </Form>
      </Wrapper>
      <WrapperImage>
        <Title>React Gifs</Title>
        <Box component="img" src={ghost} width={300} height={350} />
      </WrapperImage>
    </Section>
  );
}
