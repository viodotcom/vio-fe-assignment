import React, { ReactElement } from "react";

import Button from "components/Button";
import { ReactComponent as IconPlus } from "assets/plus.svg";
import { ReactComponent as IconMinus } from "assets/minus.svg";

import { Guest, GuestText, GuestButtonGroup } from "../../styles";

const GuestsRoom = (): ReactElement => {
  return (
    <Guest>
      <GuestText>Adults</GuestText>
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
  );
};

export default GuestsRoom;
