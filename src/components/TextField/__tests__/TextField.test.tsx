import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import TextField from "..";

describe("<TextField />", () => {
  it("should render properly", () => {
    const { container } = render(<TextField onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should be able to render a number", () => {
    const placeholder = "Guests";
    render(
      <TextField onChange={() => {}} type="number" placeholder={placeholder} />
    );
    expect(screen.getByPlaceholderText(placeholder).getAttribute("type")).toBe(
      "number"
    );
  });

  it("should trigger onClick", () => {
    const mockedOnClick = jest.fn();
    const placeholder = "Guests";

    render(
      <TextField
        onChange={() => {}}
        onClick={mockedOnClick}
        placeholder={placeholder}
      />
    );

    fireEvent.click(screen.getByPlaceholderText(placeholder));

    expect(mockedOnClick).toHaveBeenCalled();
  });
});
