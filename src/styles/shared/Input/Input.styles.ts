import styled from 'styled-components';

interface InputWrapperProps {
  minWidth?: string;
  margin?: Array<string>;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  min-width: ${(props) => props.minWidth};
  position: relative;

  margin: ${(props) => props.margin?.join(' ') || '0'};

  .input-filled {
    top: 8px;
    left: 15px;
    font-size: 10px;
    color: ${(props) => props.theme.colors.text.light};
    text-transform: uppercase;
  }
`;

interface InputProps {
  colorType: string;
}

export const Input = styled.input<InputProps>`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 50px;
  box-sizing: border-box;

  padding: 18px 15px 0px 15px;

  border: 1px solid transparent;

  font-weight: 500;
  color: ${(props) => props.theme.colors.text.light};

  background-color: ${(props) => props.theme.colors.semiDark};
  border-radius: ${(props) => props.theme.misc.borderRadius};
  transition: all 200ms ease;

  &&:focus {
    border-color: ${(props) => props.theme.colors[props.colorType]};
    outline: none;
  }

  &&::placeholder {
    color: ${(props) => props.theme.colors.text.backup};
  }

  &&:focus + label {
    top: 8px;
    left: 15px;
    font-size: 10px;
    color: ${(props) => props.theme.colors.text.light};
    text-transform: uppercase;
  }
`;

export const InputLabel = styled.label`
  color: ${(props) => props.theme.colors.text.backup};
  position: absolute;
  top: 15px;
  left: 15px;

  font-size: 16px;

  z-index: 1;
  transition: all 200ms ease-in-out;
`;
