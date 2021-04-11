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
    />
    {rightIcon && <RightIcon>{rightIcon}</RightIcon>}
  </InputContainer>
);

export default TextField;
