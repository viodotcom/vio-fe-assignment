import styled from "styled-components";

import { BORDER_GRAY, BLUE, HEAVY_BLACK } from "constants/colors";
import { INPUT_RADIUS } from "constants/styles";
import ArrowDownSvg from "assets/arrow-down.svg";

export const Container = styled.div`
  position: relative;
`;

export const StyledSelect = styled.select`
  appearance: none;
  background: url(${ArrowDownSvg}) no-repeat 90% 8px;
  border: 1px solid ${BORDER_GRAY};
  border-radius: ${INPUT_RADIUS}px;
  color: ${HEAVY_BLACK};
  padding: 12px 44px 12px 16px;

  &:focus {
    border: 1px solid ${BLUE};
    box-shadow: 0 0 1px ${BLUE};
    outline: none;
    transition: all ease 0.2s;
  }
`;
