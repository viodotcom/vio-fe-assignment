import React from "react";
import { render } from "@testing-library/react";

import Box from "..";

describe("<Box />", () => {
  it("should render properly", () => {
    const { container } = render(<Box>Box content</Box>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
