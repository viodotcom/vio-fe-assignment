import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "store";

import AppForm from "..";

describe("<App />", () => {
  it("should render properly", () => {
    const { container } = render(
      <Provider store={store}>
        <AppForm openGuests={() => {}} />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
