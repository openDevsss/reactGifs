import { Box} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../../features/users/users-slice";
import ghost from "../../../images/stickerGhost.webp";
import { useAppDispatch } from "../../../redux-toolkit";
import { UserType } from "../../../types/UserType";
import { ConfirmationPopup } from "../../ConfirmationPopup/ConfirmationPopup";
import {
  ButtonSubmit,
  Description,
  Form,
  FormLegend,
  InstructionText,
  LinkSign,
  RedirectText,
  Section,
  TextSign,
  Title,
  WhiteBorderTextField,
  Wrapper,
  WrapperImage,
} from "../AuthStyled";

export function Registration() {
  type RegisterUser = Pick<UserType, "email" | "password" | "nickname">;
  
  const { register, handleSubmit } = useForm<RegisterUser>();
  const dispatch = useAppDispatch();
  const navgiate = useNavigate();

  const onSubmit: SubmitHandler<RegisterUser> = (data) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        navgiate("/sign-in");
      });
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
          <LinkSign to="/sign-in">
            <TextSign > Sign in</TextSign>
          </LinkSign>
        </RedirectText>
      </Wrapper>
      <WrapperImage>
        <Title>React Gifs</Title>
        <Box component="img" src={ghost} width={200} height={250} />
      </WrapperImage>
      <ConfirmationPopup />
    </Section>
  );
}
