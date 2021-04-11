import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "components/Button";
import { StoreStateType, removeRoom } from "store";

import GuestsRoomAdult from "./components/GuestsRoomAdult";
import GuestsRoomChildren from "./components/GuestsRoomChildren";
import { Container, Title, TitleContainer } from "./styles";

type GuestsRoomProps = {
  position: number;
};

const GuestsRoom = ({ position }: GuestsRoomProps): ReactElement => {
  const dispatch = useDispatch();
  const rooms = useSelector((state: StoreStateType) => state.rooms);
  const isRoomRemovable = rooms.length > 1;

  return (
    <Container data-testid="guests-room">
      <TitleContainer>
        <Title>Room {position + 1}</Title>
        {isRoomRemovable && (
          <Button
            onClick={() => dispatch(removeRoom(position))}
            theme="danger"
            outline
            block={false}
            dataTestId={`remove-room-${position}-button`}
          >
            Remove room
          </Button>
        )}
      </TitleContainer>
      <GuestsRoomAdult position={position} />
      <GuestsRoomChildren position={position} />
    </Container>
  );
};

export default GuestsRoom;
