import React, { ReactElement, useState } from "react";
import { Provider } from "react-redux";

import store from "store";
import Guests from "Guests";

import { AppContainer, Title, Logo, Content, Partners } from "./styles";
import AppForm from "./components/AppForm";

const App = (): ReactElement => {
  const [isGuestsVisible, setIsGuestsVisible] = useState(false);

  return (
    <Provider store={store}>
      <AppContainer id="root">
        <Content>
          <Logo />
          <Title>
            Find the perfect <br /> deal, always.
          </Title>
          <AppForm openGuests={() => setIsGuestsVisible(true)} />
          <Partners />
          {isGuestsVisible && (
            <Guests onClose={() => setIsGuestsVisible(false)} />
          )}
        </Content>
      </AppContainer>
    </Provider>
  );
};

export default App;
