import { getExtensions } from "./index";
describe("Get Extensions Function", () => {
  const response = [
    {
      path: ".gitattributes",
      mode: "100644",
      type: "blob",
      sha: "5ca4655119f2d7aeb66ca17e4581b77e6c2332d5",
      size: 627,
      url: "https://api.github.com/repos/xosebastian/geopagos/git/blobs/5ca4655119f2d7aeb66ca17e4581b77e6c2332d5",
    },
    {
      path: ".gitignore",
      mode: "100644",
      type: "blob",
      sha: "b667d9bcbbe70edd045943324d185f80dd6795d6",
      size: 249,
      url: "https://api.github.com/repos/xosebastian/geopagos/git/blobs/b667d9bcbbe70edd045943324d185f80dd6795d6",
    },
    {
      path: "README.md",
      mode: "100644",
      type: "blob",
      sha: "fb3183ffdb920b63c655b2ae982045f3dd6f8bf0",
      size: 242,
      url: "https://api.github.com/repos/xosebastian/geopagos/git/blobs/fb3183ffdb920b63c655b2ae982045f3dd6f8bf0",
    },
  ];
  const success = ["gitattributes", "gitignore", "md"];

  const error = ["java", "xml", "js"];

  it("Success Get Extensions", () => {
    expect(getExtensions(response)).toEqual(success);
  });

  it("Error Get Extensions", () => {
    expect(getExtensions(response)).not.toEqual(error);
  });

  it("Empty Get Extensions", () => {
    expect(getExtensions()).toEqual([]);
  });
});
