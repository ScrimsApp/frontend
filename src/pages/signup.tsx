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
  return (
    <SignWrapper>
      <GradientLayer />

      <SignForm>
        <SignTitle>You are our guest!</SignTitle>
        <SignDescription>Sign up your new account</SignDescription>

        <SignInput
          minWidth="100%"
          colorType="secondary"
          label="Nickname"
          type="text"
          margin={['0px', '0px', '36px', '0px']}
        />

        <SignInput
          minWidth="100%"
          colorType="secondary"
          label="E-mail"
          type="email"
          margin={['0px', '0px', '36px', '0px']}
        />

        <SignInput
          minWidth="100%"
          colorType="secondary"
          label="Password"
          type="password"
          margin={['0px', '0px', '36px', '0px']}
        />

        <SignInput
          minWidth="100%"
          colorType="secondary"
          label="Confirm Password"
          type="password"
          margin={['0px', '0px', '36px', '0px']}
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
