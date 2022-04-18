import { getUrl } from "./index";
describe("Get Url Function", () => {
  const owner = "xosebastian";
  const repository = "lineaurbana";

  const success =
    "https://api.github.com/repos/xosebastian/lineaurbana/git/trees/master";

  const error = "https://api.github.com/repos/xosebastian/";

  it("Success Get Url", () => {
    expect(getUrl(owner, repository)).toEqual(success);
  });

  it("Error Get Url", () => {
    expect(getUrl(owner, repository)).not.toEqual(error);
  });

  it("Empty Get Url", () => {
    expect(getUrl()).not.toBeDefined();
  });
});
