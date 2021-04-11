import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import store, { addRoom, resetStore } from "store";

import GuestsRoom from "..";

describe("<GuestsRoom />", () => {
  beforeEach(() => store.dispatch(resetStore()));

  it("should render properly", () => {
    const { container } = render(
      <Provider store={store}>
        <GuestsRoom position={0} />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should display the remove room button if at least 2 rooms exists", () => {
    const { rerender } = render(
      <Provider store={store}>
        <GuestsRoom position={0} />
      </Provider>
    );

    expect(screen.queryByText("Remove room")).toBeNull();

    store.dispatch(addRoom());
    rerender(
      <Provider store={store}>
        <GuestsRoom position={0} />
      </Provider>
    );

    expect(screen.queryByText("Remove room")).toBeTruthy();
  });
});
