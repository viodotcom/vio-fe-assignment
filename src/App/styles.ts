import styled from "styled-components";

import { BLACK } from "constants/colors";
import { ReactComponent as LogoSvg } from "assets/logo.svg";
import { ReactComponent as PartnersSvg } from "assets/partners.svg";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Logo = styled(LogoSvg)`
  width: 120px;
  height: 32px;
  margin-bottom: 86px;
`;

export const Partners = styled(PartnersSvg)`
  height: 19px;
  margin-top: 32px;
`;

export const Title = styled.h2`
  color: ${BLACK};
  font-size: 26px;
  font-weight: normal;
  line-height: 36px;
  margin-bottom: 146px;
`;

export const FieldSet = styled.fieldset`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const GuestsContainer = styled.div`
  width: 80px;
  max-width: 80px;
  margin-left: 12px;
`;
