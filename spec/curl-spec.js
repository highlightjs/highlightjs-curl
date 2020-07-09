const hljs = require("highlight.js/lib/highlight");
const { definer: curl } = require("../curl");
const fs = require("fs");
const path = require("path");
hljs.registerLanguage("curl", curl);

describe("respec-highlight bundle", () => {
  it("defines curl", () => {

    // highlight has curl defined
    const curl = hljs.getLanguage("curl");
    expect(curl).toBeDefined();
  });

  it("highlights curl", () => {

    // read the test data
    const input = fs.readFileSync(
      path.resolve(__dirname, "./input.txt"),
      "utf-8"
    );

    // highlight the test data
    const { value: result, language } = hljs.highlightAuto(input, [
      "curl",
    ]);
    expect(language).toBe("curl");

    // verify the highlighting is what is expected
    const expected = fs.readFileSync(
      path.resolve(__dirname, "./expected.txt"),
      "utf-8"
    );
    expect(result).toBe(expected);
  });
});
