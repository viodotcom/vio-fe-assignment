import styled from "styled-components";

import { WHITE } from "constants/colors";
import { DEFAULT_RADIUS } from "constants/styles";

const Box = styled.div`
  background-color: ${WHITE};
  border-radius: ${DEFAULT_RADIUS}px;
  box-shadow: 0px 0px 1px rgba(68, 80, 95, 0.08),
    0px 1px 4px rgba(68, 80, 95, 0.2);
  padding: 12px 8px;
`;

export default Box;
