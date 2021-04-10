import React, { ReactElement, useState } from "react";

import Box from "components/Box";
import TextField from "components/TextField";
import Calendar from "components/Calendar";
import Button from "components/Button";
import { ReactComponent as IconPin } from "assets/pin.svg";
import { ReactComponent as IconCursor } from "assets/cursor.svg";
import { ReactComponent as IconGuests } from "assets/guests.svg";
import Guests from "Guests";

import {
  AppContainer,
  Title,
  Logo,
  Content,
  Partners,
  FieldSet,
  GuestsContainer,
} from "./styles";

const App = (): ReactElement => {
  const [isGuestsVisible, setIsGuestsVisible] = useState(false);

  return (
    <AppContainer id="root">
      <Content>
        <Logo />
        <Title>
          Find the perfect <br /> deal, always.
        </Title>
        <Box>
          <form>
            <FieldSet>
              <TextField
                placeholder="Type city, place, or hotel name"
                leftIcon={<IconPin />}
                rightIcon={<IconCursor />}
              />
            </FieldSet>
            <FieldSet>
              <Calendar />
              <GuestsContainer>
                <TextField
                  leftIcon={<IconGuests />}
                  type="number"
                  min={1}
                  max={9}
                  readonly
                  onClick={() => setIsGuestsVisible(true)}
                />
              </GuestsContainer>
            </FieldSet>
            <Button>Search</Button>
          </form>
        </Box>
        <Partners />
        {isGuestsVisible && (
          <Guests onClose={() => setIsGuestsVisible(false)} />
        )}
      </Content>
    </AppContainer>
  );
};

export default App;
