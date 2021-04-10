import styled from "styled-components";

import { BORDER_GRAY, BLUE } from "constants/colors";
import { INPUT_RADIUS } from "constants/styles";

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const LeftIcon = styled.i`
  position: absolute;
  top: 12px;
  left: 12px;
`;

export const RightIcon = styled.i`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${BORDER_GRAY};
  border-radius: ${INPUT_RADIUS}px;
  display: flex;
  font-size: 15px;
  line-height: 24px;
  padding-left: ${({ leftIcon }) => (leftIcon ? "36px" : "8px")};
  padding-right: ${({ rightIcon }) => (rightIcon ? "36px" : "8px")};

  &:focus {
    border: 1px solid ${BLUE};
    box-shadow: 0 0 1px ${BLUE};
    outline: none;
    transition: all ease 0.2s;
  }
`;
