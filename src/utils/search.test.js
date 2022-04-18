import { search } from "./index";
describe("Search Extensions Function", () => {
  const response = [
    {
      name: "js",
      count: 2,
    },
    {
      name: "json",
      count: 5,
    },
    {
      name: "xml",
      count: 22,
    },
    {
      name: "css",
      count: 3,
    },
  ];
  const success = [
    {
      name: "json",
      count: 5,
    },
  ];

  const error = [
    {
      name: "js",
      count: 2,
    },
  ];

  it("Success Search", () => {
    expect(search(response, "json")).toEqual(success);
  });

  it("Error Search", () => {
    expect(search(response, "3")).not.toEqual(error);
  });

  it("Empty Search", () => {
    expect(search()).toEqual([]);
  });
});
