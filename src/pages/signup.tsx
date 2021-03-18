import { useFormik } from 'formik';
import Link from 'next/link';

import SignInput from '../components/SignInput/SignInput.component';

import {
  AccountLink,
  AccountLinkWrapper,
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

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <SignWrapper>
      <GradientLayer />

      <SignForm onSubmit={formik.handleSubmit}>
        <SignTitle>You are our guest!</SignTitle>
        <SignDescription>Sign up your new account</SignDescription>

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
