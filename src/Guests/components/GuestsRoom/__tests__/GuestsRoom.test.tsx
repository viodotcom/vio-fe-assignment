import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import store from "store";

import GuestsRoom from "..";

describe("<GuestsRoom />", () => {
  it("should render properly", () => {
    const { container } = render(
      <Provider store={store}>
        <GuestsRoom position={0} />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
