import React, { ReactElement } from "react";

import { Input, InputContainer, LeftIcon, RightIcon } from "./styles";

interface TextFieldProps {
  placeholder?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  type?: string;
  min?: number;
  max?: number;
  readonly?: boolean;
  onClick?: () => void;
  onChange: () => void;
  value?: string;
}

const TextField = ({
  placeholder,
  leftIcon,
  rightIcon,
  type = "text",
  min,
  max,
  readonly,
  onClick,
  onChange,
  value = "",
}: TextFieldProps): ReactElement => (
  <InputContainer>
    {leftIcon && <LeftIcon onClick={onClick}>{leftIcon}</LeftIcon>}
    <Input
      type={type}
      placeholder={placeholder}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      min={min}
      max={max}
      readonly={readonly}
      onClick={onClick}
      onChange={onChange}
      value={value}
    />
    {rightIcon && <RightIcon>{rightIcon}</RightIcon>}
  </InputContainer>
);

export default TextField;
