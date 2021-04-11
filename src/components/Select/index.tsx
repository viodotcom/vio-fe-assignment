import React, { ReactElement, FunctionComponent } from "react";

import { Container, StyledSelect } from "./styles";

interface OptionProps {
  value: string;
}
interface SelectProps {
  onChange: (event) => void;
  value?: string;
  dataTestId?: string;
}

const Select: FunctionComponent<SelectProps> = ({
  children,
  onChange,
  value = "",
  dataTestId = "select",
}): ReactElement => {
  return (
    <Container>
      <StyledSelect data-testid={dataTestId} value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </Container>
  );
};

export const Option: FunctionComponent<OptionProps> = ({
  children,
  value,
}): ReactElement => <option value={value}>{children}</option>;

export default Select;
