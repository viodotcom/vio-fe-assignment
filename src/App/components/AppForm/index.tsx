import React, { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";

import store, { StoreStateType, initializeStore } from "store";
import Box from "components/Box";
import TextField from "components/TextField";
import Calendar from "components/Calendar";
import Button from "components/Button";
import { ReactComponent as IconPin } from "assets/pin.svg";
import { ReactComponent as IconCursor } from "assets/cursor.svg";
import { ReactComponent as IconGuests } from "assets/guests.svg";

import { FieldSet, GuestsContainer } from "App/styles";

interface AppFormProps {
  openGuests: () => void;
}

const AppForm = ({ openGuests }: AppFormProps): ReactElement => {
  const { rooms } = useSelector((state: StoreStateType) => state);
  const urlParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    store.dispatch(initializeStore(urlParams.get("rooms")));
  }, []);

  return (
    <Box>
      <form>
        <FieldSet>
          <TextField
            placeholder="Type city, place, or hotel name"
            leftIcon={<IconPin />}
            rightIcon={<IconCursor />}
            onChange={() => {}}
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
              value={String(rooms.length)}
              onClick={openGuests}
              onChange={() => {}}
            />
          </GuestsContainer>
        </FieldSet>
        <Button onClick={() => {}}>Search</Button>
      </form>
    </Box>
  );
};

export default AppForm;
