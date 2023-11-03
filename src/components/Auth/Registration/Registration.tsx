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
  WrapperImage,
} from "../AuthStyled";
import ghost from "../../../images/stickerGhost.webp";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserType } from "../../../Type/UserType";

export function Registration() {
  type RegisterUser = Pick<UserType, "email" | "password" | "nickname">;
  const { register, handleSubmit } = useForm<RegisterUser>();

  const onSubmit: SubmitHandler<RegisterUser> = (data) => {
    console.log(data);
  };

  return (
    <Section>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormLegend>sign up</FormLegend>
          <InstructionText>Welcome! Please enter details.</InstructionText>
          <Description>Nickname</Description>
          <WhiteBorderTextField
            {...register("nickname")}
            size="small"
            placeholder="Create nickname"
          />
          <Description>Email</Description>
          <WhiteBorderTextField
            {...register("email")}
            size="small"
            placeholder="Enter your email"
          />
          <Description>Password</Description>
          <WhiteBorderTextField
            {...register("password")}
            size="small"
            placeholder="Create password"
            type="password"
          />
          <ButtonSubmit type="submit">sign up</ButtonSubmit>
        </Form>
        <RedirectText>
          Do you have an account?
          <Link to="/sign-in">
            <Typography component="span">Sign in</Typography>
          </Link>
        </RedirectText>
      </Wrapper>
      <WrapperImage>
        <Title>React Gifs</Title>
        <Box component={"img"} src={ghost} width={300} height={350} />
      </WrapperImage>
    </Section>
  );
}
