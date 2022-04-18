import { count } from "./index";
describe("Count Extensions Function", () => {
  const response = ["js", "js"];
  const success = [
    {
      name: "js",
      count: 2,
    },
  ];

  const error = [
    {
      name: "jsx",
      count: 3,
    },
  ];

  it("Success Count", () => {
    expect(count(response)).toEqual(success);
  });

  it("Error Count", () => {
    expect(count(response)).not.toEqual(error);
  });

  it("Empty Count", () => {
    expect(count()).toEqual([]);
  });
});
