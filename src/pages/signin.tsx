import { useFormik } from 'formik';
import Link from 'next/link';

import SignInput from '../components/SignInput/SignInput.component';

import {
  GradientLayer,
  SignDescription,
  SignForm,
  SignTitle,
  SignWrapper,
  AccountLink,
  AccountLinkWrapper,
} from '../styles/pages/sign/Sign.styles';

import {
  Button,
  ButtonOverlay,
  ButtonWrapper,
} from '../styles/shared/Button/Button.styles';

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnChange: false,
  });

  return (
    <SignWrapper>
      <GradientLayer />

      <SignForm onSubmit={formik.handleSubmit}>
        <SignTitle>Welcome Back!</SignTitle>
        <SignDescription>Sign in with your account</SignDescription>

        <SignInput
          name="email"
          minWidth="100%"
          colorType="primary"
          label="E-mail"
          type="email"
          margin={['0px', '0px', '36px', '0px']}
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <SignInput
          name="password"
          minWidth="100%"
          colorType="primary"
          label="Confirm Password"
          type="password"
          margin={['0px', '0px', '36px', '0px']}
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        <ButtonWrapper minWidth="100%" margin={['0px', '0px', '36px', '0px']}>
          <ButtonOverlay className="overlay" type="primary" sign />
          <Button type="submit">Sign in</Button>
        </ButtonWrapper>

        <AccountLinkWrapper>
          Dont’t have an account?
          <Link passHref href="/signup">
            <AccountLink> Register here</AccountLink>
          </Link>
        </AccountLinkWrapper>
      </SignForm>
    </SignWrapper>
  );
};

export default SignIn;
