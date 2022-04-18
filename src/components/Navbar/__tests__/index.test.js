/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../index";

const mockOnClick = jest.fn();

const getRenderedComponent = () => render(<Navbar onClick={mockOnClick} />);

describe("<Navbar/>", () => {
  it("Must render the component", () => {
    const { baseElement } = getRenderedComponent();
    expect(baseElement).toMatchSnapshot();
  });
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    getRenderedComponent();
    expect(spy).not.toHaveBeenCalled();
  });

  it("Should write the repository name", () => {
    getRenderedComponent();
    const repository = screen.getByTestId("repository");
    fireEvent.change(repository, { target: { value: "xosebastian" } });
    expect(repository.value).toBe("xosebastian");
  });
  it("Should write the owner name", () => {
    getRenderedComponent();
    const owner = screen.getByTestId("owner");
    fireEvent.change(owner, { target: { value: "lineaurbana" } });
    expect(owner.value).toBe("lineaurbana");
  });

  it("Must fire Click event for button", () => {
    getRenderedComponent();
    const repository = screen.getByTestId("repository");
    fireEvent.change(repository, { target: { value: "xosebastian" } });
    const owner = screen.getByTestId("owner");
    fireEvent.change(owner, { target: { value: "lineaurbana" } });
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
