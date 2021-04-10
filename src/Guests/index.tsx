import React, { ReactElement } from "react";

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
  return (
    <Container>
      <NavBar>
        <IconClose onClick={onClose} />
        <NavBarTitle>Who is staying</NavBarTitle>
      </NavBar>
      <Content>
        <GuestsRoom />
        <GuestsRoom />
        <Button onClick={onClose} theme="secondary">
          + Add Room
        </Button>
      </Content>
      <Footer>
        <Button onClick={onClose}>
          <IconSearch />
          Search
        </Button>
      </Footer>
    </Container>
  );
};

export default Guests;
