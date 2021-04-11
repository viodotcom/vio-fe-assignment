import React, { ReactElement, FunctionComponent } from "react";

import { StyledButton } from "./styles";

interface ButtonProps {
  theme?: string;
  onClick: () => void;
  outline?: boolean;
  block?: boolean;
  dataTestId?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  theme = "primary",
  children,
  onClick,
  outline = false,
  block = true,
  dataTestId = "button",
}): ReactElement => {
  return (
    <StyledButton
      onClick={onClick}
      theme={theme}
      outline={outline}
      block={block}
      data-testid={dataTestId}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
