import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser } from "features/users/users-slice";
import { useAppDispatch } from "redux-hooks";
import logo from "images/kub.svg";

import {
  ButtonSubmit,
  Description,
  ErrorMessageRegistration,
  Form,
  FormLegend,
  LinkSign,
  RedirectText,
  Section,
  StyledLogoImage,
  StyledTitleCompany,
  TextSign,
  WhiteBorderTextField,
} from "../style";

export function Registration() {
  type RegisterUser = {
    email: string;
    password: string;
    nickname: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>({
    mode: "onSubmit",
  });
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
      <StyledLogoImage src={logo} alt="logo" />
      <StyledTitleCompany>openDevsss</StyledTitleCompany>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLegend>REGISTRATION</FormLegend>
        <Description>Nickname</Description>
        <WhiteBorderTextField
          {...register("nickname", {
            required: {
              value: true,
              message: "This field cannot be empty",
            },
            maxLength: {
              value: 30,
              message: "Max length 30 symbols",
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
                // eslint-disable-next-line no-useless-escape
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
        <ButtonSubmit type="submit">sign up</ButtonSubmit>
      </Form>
      <RedirectText>
        Do you have an account?
        <LinkSign to="/sign-in">
          <TextSign> Sign in</TextSign>
        </LinkSign>
      </RedirectText>
    </Section>
  );
}
