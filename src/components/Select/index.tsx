import React, { ReactElement, FunctionComponent } from "react";

import { Container, StyledSelect } from "./styles";

interface OptionProps {
  value: string;
}

const Select: FunctionComponent = ({ children }): ReactElement => {
  return (
    <Container>
      <StyledSelect>{children}</StyledSelect>
    </Container>
  );
};

const Option: FunctionComponent<OptionProps> = ({
  children,
  value,
}): ReactElement => <option value={value}>{children}</option>;

Select.Option = Option;

export default Select;
