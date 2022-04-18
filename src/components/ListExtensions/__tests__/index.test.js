/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import ListExtensions from "../index";

const data = [
  {
    name: "js",
    counst: 2,
  },
];

const getRenderedComponent = () => render(<ListExtensions data={data} />);

describe("<ListExtensions/>", () => {
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
