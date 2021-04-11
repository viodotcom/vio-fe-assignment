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
  const { rooms, maxNumberOfRooms } = useSelector(
    (state: StoreStateType) => state
  );
  const dispatch = useDispatch();
  const isAddRoomButtonDisabled = rooms.length === maxNumberOfRooms;
  const numberOfChildWithoutAge = rooms.reduce((acc, room) => {
    acc += room.children.filter((child) => child.age === null).length;
    return acc;
  }, 0);
  const isSearchButtonDisabled = Boolean(numberOfChildWithoutAge);

  const handleClose = () => {
    dispatch(resetStore());
    onClose();
  };

  const getSearchButtonText = (): string => {
    const roomsText = rooms.length > 1 ? " rooms" : " room";
    const totalGuests = rooms.reduce((acc, room) => {
      acc += room.totalGuests;
      return acc;
    }, 0);
    const guestsText = totalGuests > 1 ? " guests" : " guest";

    return `Search ${rooms.length + roomsText} • ${totalGuests + guestsText}`;
  };

  return (
    <Container>
      <NavBar>
        <IconClose onClick={handleClose} data-testid="icon-close" />
        <NavBarTitle>Who is staying</NavBarTitle>
      </NavBar>
      <Content>
        {rooms.map((room, index) => (
          <GuestsRoom key={`room-${index}`} position={index} />
        ))}
        <Button
          onClick={() => dispatch(addRoom())}
          theme="secondary"
          disabled={isAddRoomButtonDisabled}
        >
          + Add Room
        </Button>
      </Content>
      <Footer>
        <Button
          onClick={handleClose}
          dataTestId="search-button"
          disabled={isSearchButtonDisabled}
        >
          <IconSearch />
          {getSearchButtonText()}
        </Button>
      </Footer>
    </Container>
  );
};

export default Guests;
