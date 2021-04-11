import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";

import store, { resetStore } from "store";

import GuestsRoomChildren from "..";

describe("<GuestsRoomChildren />", () => {
  beforeEach(() => store.dispatch(resetStore()));

  it("should render properly", () => {
    const { container } = render(
      <Provider store={store}>
        <GuestsRoomChildren position={0} />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should be able to add and remove a child", () => {
    render(
      <Provider store={store}>
        <GuestsRoomChildren position={0} />
      </Provider>
    );

    const childrenCounter = screen.getByTestId("children-counter");

    expect(childrenCounter.textContent).toBe("0");

    fireEvent.click(screen.getByTestId("add-child-0-button"));
    expect(childrenCounter.textContent).toBe("1");

    fireEvent.click(screen.getByTestId("remove-child-0-button"));
    expect(childrenCounter.textContent).toBe("0");
  });

  it("should be able to change a child age", () => {
    const childAge = 3;

    render(
      <Provider store={store}>
        <GuestsRoomChildren position={0} />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("add-child-0-button"));
    fireEvent.change(screen.getByTestId("child-0-0-select"), {
      target: { value: childAge },
    });

    const child = store.getState().rooms[0].children[0];

    expect(child.age).toBe(childAge);
  });
});
