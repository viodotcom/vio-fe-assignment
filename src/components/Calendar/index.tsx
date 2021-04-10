import React, { ReactElement } from "react";
import styled from "styled-components";

import { ReactComponent as IconCalendar } from "assets/calendar.svg";
import { BORDER_GRAY } from "constants/colors";
import { INPUT_RADIUS } from "constants/styles";

const CalendarContainer = styled.div`
  width: 100%;
  height: 40px;
  align-items: center;
  border: 1px solid ${BORDER_GRAY};
  border-radius: ${INPUT_RADIUS}px;
  display: flex;
  font-size: 15px;
  justify-content: space-between;
  line-height: 24px;
  padding: 12px 24px 12px 12px;
`;

const Pipe = styled.span`
  height: 24px;
  width: 1px;
  background-color: ${BORDER_GRAY};
  display: block;
`;

const Calendar = (): ReactElement => (
  <CalendarContainer>
    <IconCalendar />
    <strong>Check-in</strong>
    <Pipe />
    <strong>Check-out</strong>
  </CalendarContainer>
);

export default Calendar;
