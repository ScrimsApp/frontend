import styled from 'styled-components';

export const SignWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const GradientLayer = styled.div`
  width: 65%;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.21),
      rgba(255, 255, 255, 0.21)
    ),
    linear-gradient(142.17deg, #7d52e0 31.67%, #4767f9 60.11%, #fe54a1 93.35%),
    #192039;

  padding: 56px;

  @media only screen and (max-width: 1000px) {
    width: 50%;
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
    height: 15px;
    padding: 0px;
  }
`;

export const SignForm = styled.form`
  width: 45%;
  max-width: 600px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;

  padding: 56px;
  margin: 0 auto;

  box-sizing: border-box;

  @media only screen and (max-width: 1000px) {
    width: 50%;
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
  }

  @media only screen and (max-width: 500px) {
    padding: 56px 36px;
  }
`;

export const SignTitle = styled.h1`
  font-size: 28px;
  color: ${(props) => props.theme.colors.text.light};
  margin-bottom: 36px;
  font-weight: bold;
`;

export const SignDescription = styled.h2`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text.light};
  margin-bottom: 36px;
  font-weight: 500;
`;

interface AccountLinkWrapperProps {
  margin?: string;
  fontSize?: string;
  color?: string;
}

export const AccountLinkWrapper = styled.span<AccountLinkWrapperProps>`
  width: 100%;
  text-align: center;
  font-weight: 500;
  margin: ${(props) => (props.margin ? props.margin : '')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  color: ${(props) => (props.color ? props.color : '#ffffff')};
`;

export const AccountLink = styled.a`
  width: 100%;
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.light};
`;

export const ErrorLabel = styled.span`
  display: inline-block;
  width: 100%;
  min-height: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.error};
  margin-bottom: 20px;
`;
