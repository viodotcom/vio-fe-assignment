import React from "react";
import { render } from "@testing-library/react";

import Select from "..";

describe("<Select />", () => {
  it("should render properly", () => {
    const { container } = render(
      <Select>
        <Select.Option value="">-</Select.Option>
        <Select.Option value="1">1</Select.Option>
        <Select.Option value="2">2</Select.Option>
      </Select>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
