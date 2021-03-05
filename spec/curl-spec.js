const hljs = require("highlight.js/lib/core");
const curl = require("../src/languages/curl");
const fs = require("fs");
const path = require("path");
const languageName = "curl";
hljs.registerLanguage(languageName, curl);

describe("respec-highlight bundle", () => {
  it("defines " + languageName, () => {

    // highlight has curl defined
    const curlDef = hljs.getLanguage(languageName);
    expect(curlDef).toBeDefined();
  });

  it("highlights " + languageName, () => {
    const input = "cURL -X GET \"https://service.example.com/v.2/endpoint?q=test\""
    const expected = "<span class=\"hljs-keyword\">cURL</span> <span class=\"hljs-literal\">-X <span class=\"hljs-symbol\">GET</span></span> <span class=\"hljs-string\">&quot;https://service.example.com/v.2/endpoint?q=test&quot;</span>"
    // highlight the test string
    const { value: result, language } = hljs.highlightAuto(input, [
      languageName,
    ]);
    expect(language).toBe(languageName);
    expect(result).toBe(expected);
  });

  it("highlights " + languageName, () => {

    // read the test data from a file
    const sample = fs.readFileSync(
      path.resolve(__dirname, "./sample.txt"),
      "utf-8"
    );

    // highlight the test data
    const { value: result, language } = hljs.highlightAuto(sample, [
      languageName,
    ]);
    expect(language).toBe(languageName);

    // verify the highlighting is what is expected
    const expected = fs.readFileSync(
      path.resolve(__dirname, "./expected.txt"),
      "utf-8"
    );
    expect(result).toBe(expected);
  });
});
