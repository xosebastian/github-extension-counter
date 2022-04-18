/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import SearchBox from "../index";

const mockOnSearch = jest.fn();
const mockOnOrder = jest.fn();

const getRenderedComponent = () =>
  render(<SearchBox onSearch={mockOnSearch} onOrder={mockOnOrder} />);

describe("<SearchBox/>", () => {
  it("Must render the component", () => {
    const { baseElement } = getRenderedComponent();
    expect(baseElement).toMatchSnapshot();
  });

  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    getRenderedComponent();
    expect(spy).not.toHaveBeenCalled();
  });
});
