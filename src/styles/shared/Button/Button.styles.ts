import styled from 'styled-components';

interface ButtonWrapperProps {
  minWidth: string;
  margin?: Array<string>;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  min-width: ${(props) => props.minWidth};
  position: relative;
  overflow: hidden;

  background-color: ${(props) => props.theme.colors.semiDark};
  border-radius: ${(props) => props.theme.misc.borderRadius};
  text-align: center;

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
  display: inline-block;
  position: relative;

  color: ${(props) => props.theme.colors.text.light};
  font-weight: 600;

  padding: 10px 28px;
  border-radius: ${(props) => props.theme.misc.borderRadius};
  transition: all 200ms ease-in-out;
`;
