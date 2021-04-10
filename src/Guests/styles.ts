import styled from "styled-components";

import { WHITE, HEAVY_BLACK, BLUE } from "constants/colors";
import { ReactComponent as CloseSvg } from "assets/close.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${WHITE};
  position: fixed;
  top: 0;
  left: 0;
  padding-bottom: 80px;
`;

export const Content = styled.div`
  height: calc(100% - 70px);
  overflow: auto;
  padding: 22px 16px 0;
`;

export const NavBar = styled.div`
  height: 64px;
  align-items: center;
  background-color: ${WHITE};
  box-shadow: 0px 0px 1px rgba(68, 80, 95, 0.08),
    0px 1px 4px rgba(68, 80, 95, 0.2);
  display: flex;
  position: relative;
  justify-content: center;
`;

export const NavBarTitle = styled.h3`
  color: ${HEAVY_BLACK};
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
`;

export const IconClose = styled(CloseSvg)`
  color: ${BLUE};
  fill: currentColor;
  position: absolute;
  top: 21px;
  left: 12px;
`;

export const Footer = styled.footer`
  height: 40px;
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 32px;
`;
