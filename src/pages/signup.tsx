import Link from 'next/link';
import { useState } from 'react';
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

const SignUp = () => {
  const [responseError, setResponseError] = useState('');
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => handleSignUp(values),
    validateOnChange: false,
    validationSchema: signUpSchema,
  });

  const handleSignUp = async (values: any) => {
    const response = await api.post('/auth/register', {
      name: values.nickname,
      email: values.email,
      password: values.password,
      password_confirmation: values.password,
    });

    const { status } = response;

    status === 201
      ? router.push('signin')
      : setResponseError('Something went wrong!');
  };

  return (
    <SignWrapper>
      <GradientLayer />

      <SignForm onSubmit={formik.handleSubmit}>
        <SignTitle>{signUpContent.title}</SignTitle>
        <SignDescription>{signUpContent.description}</SignDescription>

        <ErrorLabel>
          {Object.values(formik.errors).find((error) => error) || responseError}
        </ErrorLabel>

        <SignInput
          name="nickname"
          minWidth="100%"
          colorType="secondary"
          label="Nickname"
          type="text"
          margin={['0px', '0px', '36px', '0px']}
          value={formik.values.nickname}
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
          name="confirmPassword"
          minWidth="100%"
          colorType="secondary"
          label="Confirm Password"
          type="password"
          margin={['0px', '0px', '36px', '0px']}
          value={formik.values.confirmPassword}
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
