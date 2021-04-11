import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";

import { serializeRooms } from "helpers";
import store, { resetStore } from "store";

import Guests from "..";

jest.mock("helpers", () => ({
  serializeRooms: jest.fn(),
}));

const mockedReplace = jest.fn();

Object.defineProperty(window, "location", {
  value: {
    replace: mockedReplace,
  },
});

describe("<Guests />", () => {
  beforeEach(() => store.dispatch(resetStore()));

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
    expect(mockedReplace).toHaveBeenCalled();
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

  describe("Search Button", () => {
    it("should have a text with total of rooms and guests", () => {
      render(
        <Provider store={store}>
          <Guests onClose={() => {}} />
        </Provider>
      );

      const searchButton = screen.getByTestId("search-button");

      expect(searchButton.textContent).toBe(
        "search.svgSearch 1 room • 1 guest"
      );

      fireEvent.click(screen.getByTestId("add-adult-0-button"));

      expect(searchButton.textContent).toBe(
        "search.svgSearch 1 room • 2 guests"
      );

      fireEvent.click(screen.getByText("+ Add Room"));
      fireEvent.click(screen.getByTestId("add-adult-1-button"));
      fireEvent.click(screen.getByTestId("add-child-0-button"));

      expect(searchButton.textContent).toBe(
        "search.svgSearch 2 rooms • 5 guests"
      );
    });

    it("should be disabled if the room has a child without age defined", () => {
      render(
        <Provider store={store}>
          <Guests onClose={() => {}} />
        </Provider>
      );

      const searchButton = screen.getByTestId("search-button");

      expect(searchButton).not.toHaveAttribute("disabled");

      fireEvent.click(screen.getByTestId("add-child-0-button"));
      expect(searchButton).toHaveAttribute("disabled");

      fireEvent.change(screen.getByTestId("child-0-0-select"), {
        target: { value: 0 },
      });
      expect(searchButton).not.toHaveAttribute("disabled");
    });

    it("should emit a search", () => {
      const mockedOnClose = jest.fn();

      render(
        <Provider store={store}>
          <Guests onClose={mockedOnClose} />
        </Provider>
      );

      const searchButton = screen.getByTestId("search-button");

      fireEvent.click(screen.getByTestId("add-child-0-button"));
      fireEvent.change(screen.getByTestId("child-0-0-select"), {
        target: { value: 0 },
      });
      fireEvent.click(searchButton);

      expect(serializeRooms).toHaveBeenCalledWith(store.getState().rooms);
      expect(mockedOnClose).toHaveBeenCalled();
      expect(mockedReplace).toHaveBeenCalled();
    });
  });
});
