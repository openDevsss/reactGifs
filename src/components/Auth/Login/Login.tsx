import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "features/users/users-slice";
import { useAppDispatch } from "redux-hooks";
import logo from "images/kub.svg";

import {
  ButtonSubmit,
  Description,
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

export function Login() {
  type LoginUser = {
    email: string;
    password: string;
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginUser>();

  const onSubmit: SubmitHandler<LoginUser> = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  return (
    <Section>
      <StyledLogoImage src={logo} alt="logo" />
      <StyledTitleCompany>openDevsss</StyledTitleCompany>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLegend>Login</FormLegend>
        <Description>Email</Description>
        <WhiteBorderTextField
          {...register("email")}
          size="small"
          placeholder="Enter your email"
        />
        <Description>Password</Description>
        <WhiteBorderTextField
          size="small"
          placeholder="Enter your password"
          {...register("password")}
          type="password"
        />
        <ButtonSubmit type="submit">sign in</ButtonSubmit>
        <RedirectText>
          Don&apos;t have an account?
          <LinkSign to="/sign-up">
            <TextSign> Sign up</TextSign>
          </LinkSign>
        </RedirectText>
      </Form>
    </Section>
  );
}
