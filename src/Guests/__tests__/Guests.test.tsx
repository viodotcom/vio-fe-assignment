import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";

import store, { resetStore } from "store";

import Guests from "..";

describe("<Guests />", () => {
  afterEach(() => {
    store.dispatch(resetStore());
  });

  it("should render properly", () => {
    const { container } = render(
      <Provider store={store}>
        <Guests onClose={() => {}} />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should be able to close the component", () => {
    const mockedOnClose = jest.fn();
    render(
      <Provider store={store}>
        <Guests onClose={mockedOnClose} />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("icon-close"));

    expect(mockedOnClose).toHaveBeenCalled();
  });

  it("should be able to add more rooms", () => {
    render(
      <Provider store={store}>
        <Guests onClose={() => {}} />
      </Provider>
    );

    expect(screen.getAllByTestId("guests-room")).toHaveLength(1);

    fireEvent.click(screen.getByText("+ Add Room"));

    expect(screen.getAllByTestId("guests-room")).toHaveLength(2);
  });

  it("should be able to restore the store on close", () => {
    render(
      <Provider store={store}>
        <Guests onClose={() => {}} />
      </Provider>
    );

    fireEvent.click(screen.getByText("+ Add Room"));
    fireEvent.click(screen.getByText("+ Add Room"));
    expect(screen.getAllByTestId("guests-room")).toHaveLength(3);

    fireEvent.click(screen.getByTestId("icon-close"));

    expect(screen.getAllByTestId("guests-room")).toHaveLength(1);
  });
});
