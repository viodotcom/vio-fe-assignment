import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "components/Button";
import { ReactComponent as IconPlus } from "assets/plus.svg";
import { ReactComponent as IconMinus } from "assets/minus.svg";
import { StoreStateType, RoomType, addAdult, removeAdult } from "store";

import { Guest, GuestText, GuestButtonGroup } from "../../styles";

type GuestsRoomAdultsProps = {
  position: number;
};

const GuestsRoomAdult = ({ position }: GuestsRoomAdultsProps): ReactElement => {
  const dispatch = useDispatch();
  const room: RoomType = useSelector(
    (state: StoreStateType) => state.rooms[position]
  );

  return (
    <Guest>
      <GuestText>Adults</GuestText>
      <GuestButtonGroup>
        <Button
          onClick={() => dispatch(removeAdult(position))}
          theme="secondary"
          dataTestId={`remove-adult-${position}-button`}
        >
          <IconMinus />
        </Button>
        <GuestText data-testid="adults-counter">{room.adultsCounter}</GuestText>
        <Button
          onClick={() => dispatch(addAdult(position))}
          theme="secondary"
          dataTestId={`add-adult-${position}-button`}
        >
          <IconPlus />
        </Button>
      </GuestButtonGroup>
    </Guest>
  );
};

export default GuestsRoomAdult;
