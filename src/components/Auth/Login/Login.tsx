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
import { Link } from "react-router-dom";

export function Login() {
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
            <Link to="/sign-up">
              <Typography component="span"> Sign up </Typography>
            </Link>
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
