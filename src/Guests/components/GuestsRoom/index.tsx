import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";

import Button from "components/Button";
import { removeRoom } from "store";

import GuestsRoomAdult from "./components/GuestsRoomAdult";
import GuestsRoomChildren from "./components/GuestsRoomChildren";
import { Container, Title, TitleContainer } from "./styles";

type GuestsRoomProps = {
  position: number;
};

const GuestsRoom = ({ position }: GuestsRoomProps): ReactElement => {
  const dispatch = useDispatch();

  return (
    <Container data-testid="guests-room">
      <TitleContainer>
        <Title>Room {position + 1}</Title>
        <Button
          onClick={() => dispatch(removeRoom(position))}
          theme="danger"
          outline
          block={false}
        >
          Remove room
        </Button>
      </TitleContainer>
      <GuestsRoomAdult position={position} />
      <GuestsRoomChildren position={position} />
    </Container>
  );
};

export default GuestsRoom;
