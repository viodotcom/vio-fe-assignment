import React from "react";
import { render } from "@testing-library/react";

import GuestsRoomAdult from "..";

describe("<GuestsRoomAdult />", () => {
  it("should render properly", () => {
    const { container } = render(<GuestsRoomAdult />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
