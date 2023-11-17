import { SubmitHandler, useForm } from "react-hook-form";
import { selectCurrentUser } from "../../features/users/users-selectors";
import { updateCurrentUser } from "../../features/users/users-slice";

import { useAppDispatch, useAppSelector } from "../../redux-toolkit";
import { UserType } from "../../types/UserType";

import {
  EditProfileWrapper,
  ErrorMessage,
  ProfileEditAvatar,
  ProfileEditForm,
  ProfileEditInput,
  ProfileEditSubmitButton,
} from "./style";

export default function ProfileEdit() {
  const dispatch = useAppDispatch();
  type ChangedUserData = Pick<UserType, "email" | "avatar" | "nickname">;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangedUserData>();
  const onSubmit: SubmitHandler<ChangedUserData> = (data) => {
    dispatch(updateCurrentUser(data))
      .unwrap()
      .then(() => reset());
  };
  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <EditProfileWrapper>
      <ProfileEditAvatar src={currentUser?.avatar} />
      <ProfileEditForm onSubmit={handleSubmit(onSubmit)}>
        <ProfileEditInput
          // FIXME: исправить required и в никнейме и в емайле !
          {...register("avatar", {
            required: {
              value: true,
              message: "This field cannot be empty",
            },
            pattern: {
              value:
                /(http)?s?:?(\/\/[^"']*\.(?:jpeg|png|webp|gif|raw|tiff|psd|svg|jpg))/,
              message: "This is incorrect link",
            },
          })}
          label="url"
          autoComplete="none"
          size="small"
        />
        {errors.avatar && <ErrorMessage>{errors.avatar.message}</ErrorMessage>}
        <ProfileEditInput
          {...register("nickname", {
            required: {
              value: true,
              message: "This field cannot be empty",
            },
            minLength: {
              value: 3,
              message: "Min length 3 symbols",
            },
            maxLength: {
              value: 20,
              message: "Max length 20 symbols",
            },
          })}
          label="nickname"
          autoComplete="none"
          size="small"
        />
        {errors.nickname && (
          <ErrorMessage>{errors.nickname.message}</ErrorMessage>
        )}
        <ProfileEditInput
          {...register("email", {
            required: {
              value: true,
              message: "This field cannot be empty",
            },
            pattern: {
              value:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: "Please enter correct email",
            },
            minLength: {
              value: 6,
              message: "Min length 3 symbols",
            },
            maxLength: {
              value: 25,
              message: "Max length 20 symbols",
            },
          })}
          label="email"
          autoComplete="none"
          size="small"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <ProfileEditSubmitButton type="submit">Change</ProfileEditSubmitButton>
      </ProfileEditForm>
    </EditProfileWrapper>
  );
}
