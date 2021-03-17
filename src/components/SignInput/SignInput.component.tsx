import { FunctionComponent, useState } from 'react';

import {
  Input,
  InputLabel,
  InputWrapper,
} from '../../styles/shared/Input/Input.styles';

interface InputProps {
  minWidth: string;
  margin?: Array<string>;
  colorType: string;
  type: string;
  label: string;
}

const SignInput: FunctionComponent<InputProps> = ({
  minWidth,
  margin,
  colorType,
  type,
  label,
}) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');

  const handleInputValue = (value: string) => {
    setValue(value);

    value ? setActive(true) : setActive(false);
  };

  return (
    <InputWrapper margin={margin} minWidth={minWidth}>
      <Input
        type={type}
        colorType={colorType}
        value={value}
        onChange={(e) => handleInputValue(e.target.value)}
      />
      <InputLabel className={active ? 'input-filled' : ''}>{label}</InputLabel>
    </InputWrapper>
  );
};

export default SignInput;
