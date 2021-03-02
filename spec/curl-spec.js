const hljs = require("highlight.js/lib/core");
const curl = require("../src/language/curl");
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
    const input = "cURL -X GET \"https://service.example.com/v.2/endpoint?q=test\""
    const expected = "cURL <span class=\"hljs-literal\">-X</span> GET <span class=\"hljs-string\">&quot;https://service.example.com/v.2/endpoint?q=test&quot;</span>"
    // highlight the test string
    const { value: result, language } = hljs.highlightAuto(input, [
      "curl",
    ]);
    expect(language).toBe("curl");
    expect(result).toBe(expected);
  });

  it("highlights curl", () => {

    // read the test data from a file
    const input = fs.readFileSync(
      path.resolve(__dirname, "./input.txt"),
      "utf-8"
    );

    // highlight the test data
    const { value: result, language } = hljs.highlightAuto(input, [
      "curl",
    ]);
    expect(language).toBe("curl");
    // console.log(result);

    // verify the highlighting is what is expected
    const expected = fs.readFileSync(
      path.resolve(__dirname, "./expected.txt"),
      "utf-8"
    );
    expect(result).toBe(expected);
  });
});
