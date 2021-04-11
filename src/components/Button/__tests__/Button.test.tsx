import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Button from "..";

describe("<Button />", () => {
  it("should render properly", () => {
    const { container } = render(
      <Button onClick={() => {}}>Button content</Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should trigger onClick prop", () => {
    const mockedOnClick = jest.fn();
    const buttonText = "Button Content";

    render(<Button onClick={mockedOnClick}>{buttonText}</Button>);

    fireEvent.click(screen.queryByText(buttonText));

    expect(mockedOnClick).toHaveBeenCalled();
  });

  it("could be disable", () => {
    const buttonText = "Button Content";

    const { container } = render(
      <Button onClick={() => {}} disabled>
        {buttonText}
      </Button>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
