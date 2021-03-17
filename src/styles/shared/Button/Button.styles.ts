import styled from 'styled-components';

interface ButtonWrapperProps {
  minWidth: string;
  margin?: Array<string>;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: block;
  min-width: ${(props) => props.minWidth};
  height: 45px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  text-align: center;

  background-color: ${(props) => props.theme.colors.semiDark};
  border-radius: ${(props) => props.theme.misc.borderRadius};

  margin: ${(props) => props.margin?.join(' ') || '0'};

  &&:hover :first-child {
    width: 85%;
  }
`;

interface ButtonOverlayProps {
  type: string;
}

export const ButtonOverlay = styled.div<ButtonOverlayProps>`
  width: 15%;
  height: 100%;
  position: absolute;

  background-color: ${(props) => props.theme.colors[props.type]};
  transition: width 200ms ease-in-out;
`;

export const Button = styled.a`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;

  text-align: center;
  line-height: 2.8;

  color: ${(props) => props.theme.colors.text.light};
  font-weight: 600;

  border-radius: ${(props) => props.theme.misc.borderRadius};
  transition: all 200ms ease-in-out;
`;
