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
  RedirectText,
  InstructionText,
  LogInLink,
  WrapperImage,
} from "../AuthStyled";
import ghost from "../../../images/stickerGhost.webp";
import { Box, Typography } from "@mui/material";

function Login() {
  return (
    <Section>
      <Wrapper>
        <Form>
          <FormLegend>sign up</FormLegend>
          <InstructionText>Welcome! Please enter details.</InstructionText>
          <Description>Nickname</Description>
          <WhiteBorderTextField size="small" placeholder="Create nickname" />
          <Description>Email</Description>
          <WhiteBorderTextField size="small" placeholder="Enter your email" />
          <Description>Password</Description>
          <WhiteBorderTextField size="small" placeholder="Create password" />
          <ButtonSubmit>sign up</ButtonSubmit>
          <RedirectText>
            Do you have an account?
            <LogInLink>
              <Typography component="span">Sign in</Typography>
            </LogInLink>
          </RedirectText>
        </Form>
      </Wrapper>
      <WrapperImage>
        <Title>React Gifs</Title>
        <Box component={"img"} src={ghost} width={300} height={350} />
      </WrapperImage>
    </Section>
  );
}

export { Login };
