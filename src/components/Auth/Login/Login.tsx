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
  RedirictText,
  InstructionText,
  LogInLink,
} from "./LoginStyled";
import ghost from "./stickerGhost.webp";
import { Box } from "@mui/material";

function Login() {
  return (
    <Section>
      <Wrapper>
        <Form>
          <FormLegend>sign up</FormLegend>
          <InstructionText>Welcome! Please enter details.</InstructionText>
          <Description>Nickname</Description>
          <WhiteBorderTextField
            size="small"
            placeholder="Create nickname"
            sx={{
              input: {
                "&::placeholder": {
                  fontFamily: "Arvo",
                },
              },
            }}
          />
          <Description>Email</Description>
          <WhiteBorderTextField
            size="small"
            placeholder="Enter your email"
            sx={{
              input: {
                "&::placeholder": {
                  fontFamily: "Arvo",
                },
              },
            }}
          />
          <Description>Password</Description>
          <WhiteBorderTextField
            size="small"
            placeholder="Create password"
            sx={{
              input: {
                "&::placeholder": {
                  fontFamily: "Arvo",
                },
              },
            }}
          />
          <ButtonSubmit>sign up</ButtonSubmit>
          <RedirictText>
            Do you have an account? <LogInLink>Log in</LogInLink>
          </RedirictText>
        </Form>
      </Wrapper>
      <Box
        sx={{
          backgroundColor: "#5f3db5",
          width: "50%",
          padding: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title>React Gifs</Title>
        <Box component={"img"} src={ghost} width={300} height={350} />
      </Box>
    </Section>
  );
}

export { Login };
