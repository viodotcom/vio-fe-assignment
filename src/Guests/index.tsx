import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";

import { StoreStateType, addRoom, resetStore } from "store";
import Button from "components/Button";
import { ReactComponent as IconSearch } from "assets/search.svg";

import GuestsRoom from "./components/GuestsRoom";
import {
  Container,
  Content,
  NavBar,
  NavBarTitle,
  IconClose,
  Footer,
} from "./styles";

interface GuestsProps {
  onClose: () => void;
}

const Guests = ({ onClose }: GuestsProps): ReactElement => {
  const rooms = useSelector((state: StoreStateType) => state.rooms);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(resetStore());
    onClose();
  };

  return (
    <Container>
      <NavBar>
        <IconClose onClick={handleClose} data-testid="icon-close" />
        <NavBarTitle>Who is staying</NavBarTitle>
      </NavBar>
      <Content>
        {rooms.map((room, index) => (
          <GuestsRoom key={`room-${index}`} position={index} room={room} />
        ))}
        <Button onClick={() => dispatch(addRoom())} theme="secondary">
          + Add Room
        </Button>
      </Content>
      <Footer>
        <Button onClick={handleClose}>
          <IconSearch />
          Search
        </Button>
      </Footer>
    </Container>
  );
};

export default Guests;
