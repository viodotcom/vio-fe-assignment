import styled from "styled-components";

import {
  WHITE,
  BLUE,
  LIGHT_BLUE,
  LIGHT_BLUE_BORDER,
  RED,
} from "constants/colors";
import { BUTTON_RADIUS } from "constants/styles";

const themeMap = Object.freeze({
  primary: Object.freeze({
    backgroundColor: BLUE,
    borderColor: BLUE,
    color: WHITE,
    outlineColor: BLUE,
  }),
  secondary: Object.freeze({
    backgroundColor: LIGHT_BLUE,
    borderColor: LIGHT_BLUE_BORDER,
    color: BLUE,
    outlineColor: BLUE,
  }),
  danger: Object.freeze({
    backgroundColor: RED,
    borderColor: RED,
    color: WHITE,
    outlineColor: RED,
  }),
});

const getBackgroundColor = (outline: boolean, theme: string): string => {
  return outline ? "transparent" : themeMap[theme].backgroundColor;
};

const getBorder = (outline: boolean, theme: string): string => {
  return outline
    ? "1px solid transparent"
    : `1px solid ${themeMap[theme].borderColor}`;
};

const getColor = (outline: boolean, theme: string): string => {
  return outline ? themeMap[theme].outlineColor : themeMap[theme].color;
};

export const StyledButton = styled.button`
  width: ${({ block }) => (block ? "100%" : "auto")};
  min-width: 40px;
  height: 40px;
  align-items: center;
  background-color: ${({ outline, theme }) =>
    getBackgroundColor(outline, theme)};
  border: ${({ outline, theme }) => getBorder(outline, theme)};
  border-radius: ${BUTTON_RADIUS}px;
  color: ${({ outline, theme }) => getColor(outline, theme)};
  cursor: pointer;
  display: ${({ block }) => (block ? "flex" : "inline-flex")};
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  line-height: 20px;

  svg {
    margin: 0 4px;
  }

  &:disabled {
    opacity: 0.4;
  }
`;
