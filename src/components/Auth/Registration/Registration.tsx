import { Box } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../../features/users/users-slice";
import ghost from "../../../images/stickerGhost.webp";
import { useAppDispatch } from "../../../redux-toolkit";
import { UserType } from "../../../types/UserType";
import {
  ButtonSubmit,
  Description,
  ErrorMessageRegistration,
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
} from "../style";

export function Registration() {
  type RegisterUser = Pick<UserType, "email" | "password" | "nickname">;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterUser>();
  const dispatch = useAppDispatch();
  const navgiate = useNavigate();

  const onSubmit: SubmitHandler<RegisterUser> = (data) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        navgiate("/sign-in");
      });
  };
  console.log(errors);
  return (
    <Section>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormLegend>sign up</FormLegend>
          <InstructionText>Welcome! Please enter details.</InstructionText>
          <Description>Nickname</Description>
          <WhiteBorderTextField
            {...register("nickname", {
              required: {
                value: true,
                message: "This field cannot be empty",
              },
              maxLength: {
                value: 20,
                message: "Max length 20 symbols",
              },
              minLength: {
                value: 3,
                message: "Min length 3 symbols",
              },
            })}
            size="small"
            placeholder="Create nickname"
          />
          {errors.nickname && (
            <ErrorMessageRegistration>
              {errors.nickname.message}
            </ErrorMessageRegistration>
          )}
          <Description>Email</Description>
          <WhiteBorderTextField
            {...register("email", {
              required: {
                value: true,
                message: "This field cannot be empty",
              },
              maxLength: {
                value: 25,
                message: "Max length 25 symbols",
              },
              minLength: {
                value: 6,
                message: "Min length 6 symbols",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: "Please enter correct email",
              },
            })}
            size="small"
            placeholder="Enter your email"
          />
          {errors.email && (
            <ErrorMessageRegistration>
              {errors.email.message}
            </ErrorMessageRegistration>
          )}
          <Description>Password</Description>
          <WhiteBorderTextField
            {...register("password", {
              required: {
                value: true,
                message: "This field cannot be empty",
              },
              minLength: {
                value: 8,
                message: "Min length 8 symbols",
              },
            })}
            size="small"
            placeholder="Create password"
            type="password"
          />
          {errors.password && (
            <ErrorMessageRegistration>
              {errors.password.message}
            </ErrorMessageRegistration>
          )}
          <ButtonSubmit
            type="submit"
            onClick={() => {
              setError("nickname", { type: "manual" });
              setError("email", { type: "manual" });
              setError("password", { type: "manual" });
            }}
          >
            sign up
          </ButtonSubmit>
        </Form>
        <RedirectText>
          Do you have an account?
          <LinkSign to="/sign-in">
            <TextSign> Sign in</TextSign>
          </LinkSign>
        </RedirectText>
      </Wrapper>
      <WrapperImage>
        <Title>React Gifs</Title>
        <Box component="img" src={ghost} width={200} height={250} />
      </WrapperImage>
    </Section>
  );
}
