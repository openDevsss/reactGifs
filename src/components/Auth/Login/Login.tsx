import { Box, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { loginUser } from '../../../features/users/users-slice';
import ghost from '../../../images/stickerGhost.webp';
import { useAppDispatch } from '../../../redux-toolkit';
import { UserType } from '../../../types/UserType';
import {
  ButtonSubmit,
  Description,
  Form,
  FormLegend,
  InstructionText,
  RedirectText,
  Section,
  Title,
  WhiteBorderTextField,
  Wrapper,
  WrapperImage,
} from '../AuthStyled';

export function Login() {
  type LoginUser = Pick<UserType, 'email' | 'password'>;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginUser>();

  const onSubmit: SubmitHandler<LoginUser> = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        navigate('/');
      });
  };

  return (
    <Section>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormLegend>sign in</FormLegend>
          <InstructionText>Welcome! Please enter your details.</InstructionText>
          <Description>Email</Description>
          <WhiteBorderTextField
            {...register('email')}
            size="small"
            placeholder="Enter your email"
          />
          <Description>Password</Description>
          <WhiteBorderTextField
            size="small"
            placeholder="Enter your password"
            {...register('password')}
            type="password"
          />
          <ButtonSubmit type="submit">sign in</ButtonSubmit>
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
