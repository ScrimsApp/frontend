import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';

import {
  Input,
  InputLabel,
  InputWrapper,
} from '../../styles/shared/Input/Input.styles';

interface InputProps {
  name: string;
  minWidth: string;
  margin?: Array<string>;
  colorType: string;
  type: string;
  label: string;
  value: string;
  onChange?: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  initialValue?: string;
  disabled?: boolean;
}

const SignInput: FunctionComponent<InputProps> = ({
  minWidth,
  margin,
  colorType,
  type,
  label,
  name,
  value,
  onChange,
  initialValue,
  disabled,
}) => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState(initialValue || '');

  useEffect(() => {
    inputValue ? setActive(true) : setActive(false);
  }, [inputValue]);

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setInputValue(event.target.value);
  };

  return (
    <InputWrapper margin={margin} minWidth={minWidth}>
      <Input
        name={name}
        type={type}
        colorType={colorType}
        value={value}
        onChange={(event) => handleInputValue(event)}
        autoComplete="off"
        disabled={disabled}
      />
      <InputLabel className={active ? 'input-filled' : ''}>{label}</InputLabel>
    </InputWrapper>
  );
};

export default SignInput;
