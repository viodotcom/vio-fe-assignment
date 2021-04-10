import React, { ReactElement } from "react";

import Button from "components/Button";
import Select from "components/Select";
import { ReactComponent as IconPlus } from "assets/plus.svg";
import { ReactComponent as IconMinus } from "assets/minus.svg";

import {
  Guest,
  GuestText,
  GuestButtonGroup,
  KidsContainer,
  IconRemoveChild,
} from "../../styles";

const GuestsRoom = (): ReactElement => {
  return (
    <>
      <Guest>
        <GuestText>Children</GuestText>
        <GuestButtonGroup>
          <Button theme="secondary">
            <IconMinus />
          </Button>
          <GuestText>0</GuestText>
          <Button theme="secondary">
            <IconPlus />
          </Button>
        </GuestButtonGroup>
      </Guest>
      <KidsContainer>
        <Guest>
          <GuestText>Child 1 age</GuestText>
          <GuestButtonGroup>
            <Select>
              <Select.Option value="">-</Select.Option>
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
            </Select>
            <IconRemoveChild />
          </GuestButtonGroup>
        </Guest>
        <Guest>
          <GuestText>Child 2 age</GuestText>
          <GuestButtonGroup>
            <Select>
              <Select.Option value="">-</Select.Option>
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
            </Select>
            <IconRemoveChild />
          </GuestButtonGroup>
        </Guest>
      </KidsContainer>
    </>
  );
};

export default GuestsRoom;
