import React, { ReactElement, FunctionComponent } from "react";

import { StyledButton } from "./styles";

interface ButtonProps {
  theme?: string;
  onClick: () => void;
  outline?: boolean;
  block?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  theme = "primary",
  children,
  onClick,
  outline = false,
  block = true,
}): ReactElement => {
  return (
    <StyledButton
      onClick={onClick}
      theme={theme}
      outline={outline}
      block={block}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
