import { getPaths } from "./index";
describe("Get Paths Function", () => {
  const response = [
    {
      path: "server",
      mode: "040000",
      type: "tree",
      sha: "d5681a94fc3f7321f9b1b71dc6f87c40bbfd55bd",
      url: "https://api.github.com/repos/xosebastian/geopagos/git/trees/d5681a94fc3f7321f9b1b71dc6f87c40bbfd55bd",
    },
  ];
  const success = [
    "https://api.github.com/repos/xosebastian/geopagos/git/trees/d5681a94fc3f7321f9b1b71dc6f87c40bbfd55bd",
  ];

  const error = [
    "https://api.github.com/repos/xosebastian/geopagos/git/blobs/cf5405d3c91dacc3e3b49670f64780e00fba6472",
  ];

  it("Success Get Paths", () => {
    expect(getPaths(response)).toEqual(success);
  });

  it("Error Get Paths", () => {
    expect(getPaths(response)).not.toEqual(error);
  });

  it("Empty Get Paths", () => {
    expect(getPaths()).toEqual([]);
  });
});
