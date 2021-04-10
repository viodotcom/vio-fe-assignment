import styled from "styled-components";

import { ReactComponent as CloseSvg } from "assets/close.svg";
import { LIGHT_BORDER_GRAY, HEAVY_BLACK, RED } from "constants/colors";

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${LIGHT_BORDER_GRAY};
  padding-bottom: 24px;
  margin-bottom: 24px;
`;

export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Title = styled.h4`
  color: ${HEAVY_BLACK};
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const Guest = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const GuestText = styled.span`
  color: ${HEAVY_BLACK};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

export const GuestButtonGroup = styled.div`
  width: 130px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${GuestText} {
    margin: 0 20px;
  }
`;

export const KidsContainer = styled.div`
  border-left: 1px solid ${LIGHT_BORDER_GRAY};
  display: block;
  margin-left: 8px;
  padding-left: 10px;
`;

export const IconRemoveChild = styled(CloseSvg)`
  color: ${RED};
  fill: currentColor;
`;
