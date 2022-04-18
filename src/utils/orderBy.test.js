import { orderBy } from "./index";
describe("OrderBy Extensions Function", () => {
  const response = [
    {
      name: "js",
      count: 2,
    },
    {
      name: "xml",
      count: 3,
    },
  ];
  const asc = [
    {
      name: "js",
      count: 2,
    },
    {
      name: "xml",
      count: 3,
    },
  ];

  const desc = [
    {
      name: "xml",
      count: 3,
    },
    {
      name: "js",
      count: 2,
    },
  ];

  it("Order By Asc", () => {
    expect(orderBy(response, "asc")).toEqual(asc);
  });

  it("Order By Desc", () => {
    expect(orderBy(response, "desc")).toEqual(desc);
  });

  it("Error Order By", () => {
    expect(orderBy(response)).not.toEqual(desc);
  });

  it("Empty Order By", () => {
    expect(orderBy()).toEqual([]);
  });
});
