import styled from 'styled-components';

interface ButtonProps {}

export const ButtonWrapper = styled.div`
  width: 150px;
  position: relative;
  overflow: hidden;

  background-color: ${(props) => props.theme.colors.semiDark};
  border-radius: ${(props) => props.theme.misc.borderRadius};
  text-align: center;

  &&:hover :first-child {
    width: 85%;
  }
`;

export const ButtonOverlay = styled.div`
  width: 15%;
  height: 100%;
  position: absolute;

  background-color: ${(props) => props.theme.colors.primary};
  transition: width 200ms ease-in-out;
`;

export const Button = styled.a<ButtonProps>`
  display: inline-block;
  position: relative;

  color: ${(props) => props.theme.colors.text.light};
  font-weight: 600;

  padding: 10px 28px;
  border-radius: ${(props) => props.theme.misc.borderRadius};
  transition: all 200ms ease-in-out;
`;
