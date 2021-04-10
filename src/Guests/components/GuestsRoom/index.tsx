import React, { ReactElement } from "react";

import Button from "components/Button";

import GuestsRoomAdult from "./components/GuestsRoomAdult";
import GuestsRoomChildren from "./components/GuestsRoomChildren";
import { Container, Title, TitleContainer } from "./styles";

const GuestsRoom = (): ReactElement => {
  return (
    <Container>
      <TitleContainer>
        <Title>Room 1</Title>
        <Button theme="danger" outline block={false}>
          Remove room
        </Button>
      </TitleContainer>
      <GuestsRoomAdult />
      <GuestsRoomChildren />
    </Container>
  );
};

export default GuestsRoom;
