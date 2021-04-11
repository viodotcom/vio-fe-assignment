import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";

import store, { resetStore } from "store";

import GuestsRoomAdult from "..";

describe("<GuestsRoomAdult />", () => {
  beforeEach(() => store.dispatch(resetStore()));

  it("should render properly", () => {
    const { container } = render(
      <Provider store={store}>
        <GuestsRoomAdult position={0} />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should be able to increase and decrease the number of adults", () => {
    render(
      <Provider store={store}>
        <GuestsRoomAdult position={0} />
      </Provider>
    );

    const adultsCounter = screen.getByTestId("adults-counter");

    expect(adultsCounter.textContent).toBe("0");

    fireEvent.click(screen.getByTestId("add-adult-0-button"));
    expect(adultsCounter.textContent).toBe("1");

    fireEvent.click(screen.getByTestId("remove-adult-0-button"));
    expect(adultsCounter.textContent).toBe("0");
  });
});
