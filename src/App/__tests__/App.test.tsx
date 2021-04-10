import React from "react";
import { render } from "@testing-library/react";

import App from "..";

describe("<App />", () => {
  it("should render properly", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
