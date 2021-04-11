import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Select, { Option } from "..";

describe("<Select />", () => {
  it("should render properly", () => {
    const { container } = render(
      <Select onChange={() => {}}>
        <Option value="">-</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
      </Select>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should trigger onChange prop", () => {
    const mockedOnChange = jest.fn();

    render(
      <Select onChange={mockedOnChange}>
        <Option value="">-</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
      </Select>
    );

    fireEvent.change(screen.getByTestId("select"), { target: { value: 2 } });

    expect(mockedOnChange).toHaveBeenCalled();
  });
});
