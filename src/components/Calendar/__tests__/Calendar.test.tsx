import React from "react";
import { render } from "@testing-library/react";

import Calendar from "..";

describe("<Calendar />", () => {
  it("should render properly", () => {
    const { container } = render(<Calendar />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
