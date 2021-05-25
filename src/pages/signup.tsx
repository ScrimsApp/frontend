import Link from 'next/link';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';

import SignInput from '../components/SignInput/SignInput.component';
import { signUpContent } from '../content/signUp/signUp.content';

import { signUpSchema } from '../utils/validation/signUp.schema';

import {
  AccountLink,
  AccountLinkWrapper,
  ErrorLabel,
  GradientLayer,
  SignDescription,
  SignForm,
  SignTitle,
  SignWrapper,
} from '../styles/pages/sign/Sign.styles';
import {
  Button,
  ButtonOverlay,
  ButtonWrapper,
} from '../styles/shared/Button/Button.styles';

import { api } from '../config/api';
import { SignUpResponse } from '../types/responses/SignUpResponse.type';
import { GlobalContext } from '../context/GlobalContext.';

const SignUp = () => {
  const { notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    onSubmit: (values) => handleSignUp(values),
    validateOnChange: false,
    validationSchema: signUpSchema,
  });

  const handleSignUp = async (values: any) => {
    try {
      const response = await api.post<SignUpResponse>('/auth/register', {
        name: values.name,
        email: values.email,
        description: 'I am the best player',
        password: values.password,
        password_confirmation: values.password_confirmation,
      });

      const { data, status } = response;

      setNotificationStatus(true);
      setNewNotification({
        type: status === 201 ? 'success' : 'error',
        title: status === 201 ? 'Success' : 'Whoops!',
        message: data.message,
      });

      status === 201 ? router.push('signin') : null;
    } catch (error) {
      setNotificationStatus(true);
      setNewNotification({
        type: 'error',
        title: 'Whoops!',
        message: error.message,
      });
    }
  };

  return (
    <SignWrapper>
      <GradientLayer />

      <SignForm onSubmit={formik.handleSubmit}>
        <SignTitle>{signUpContent.title}</SignTitle>
        <SignDescription>{signUpContent.description}</SignDescription>

        <ErrorLabel>
          {Object.values(formik.errors).find((error) => error)}
        </ErrorLabel>

        <SignInput
          name="name"
          minWidth="100%"
          colorType="secondary"
          label="Nickname"
          type="text"
          margin={['0px', '0px', '36px', '0px']}
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <SignInput
          name="email"
          minWidth="100%"
          colorType="secondary"
          label="E-mail"
          type="email"
          margin={['0px', '0px', '36px', '0px']}
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <SignInput
          name="password"
          minWidth="100%"
          colorType="secondary"
          label="Password"
          type="password"
          margin={['0px', '0px', '36px', '0px']}
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <SignInput
          name="password_confirmation"
          minWidth="100%"
          colorType="secondary"
          label="Confirm Password"
          type="password"
          margin={['0px', '0px', '36px', '0px']}
          value={formik.values.password_confirmation}
          onChange={formik.handleChange}
        />

        <ButtonWrapper minWidth="100%" margin={['0px', '0px', '36px', '0px']}>
          <ButtonOverlay className="overlay" type="secondary" sign />
          <Button type="submit">Sign up</Button>
        </ButtonWrapper>

        <AccountLinkWrapper>
          Already have an account?
          <Link passHref href="/signin">
            <AccountLink> Sign in here</AccountLink>
          </Link>
        </AccountLinkWrapper>
      </SignForm>
    </SignWrapper>
  );
};

export default SignUp;
