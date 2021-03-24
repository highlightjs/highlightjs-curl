const hljs = require("highlight.js/lib/core");
const curl = require("../src/languages/curl");
const fs = require("fs");
const path = require("path");
const languageName = "curl";
const testFileSourcePath = "../test/markup/" + languageName + "/sample.txt";
const testFileExpectedPath = "../test/markup/" + languageName + "/sample.expect.txt";
hljs.registerLanguage(languageName, curl);

describe("highlight " + languageName, () => {
  it("defines " + languageName, () => {

    // highlight has curl defined
    const curlDef = hljs.getLanguage(languageName);
    expect(curlDef).toBeDefined();
  });

  it("highlights " + languageName, () => {
    const input = "cURL -X GET \"https://service.example.com/v.2/endpoint?q=test\""
    const expected = "<span class=\"hljs-keyword\">cURL</span> <span class=\"hljs-literal\">-X <span class=\"hljs-symbol\">GET</span></span> <span class=\"hljs-string\">&quot;https://service.example.com/v.2/endpoint?q=test&quot;</span>"
    // highlight the test string
    const result = hljs.highlight(input, { language: languageName, ignoreIllegals: true });
    expect(result.language).toBe(languageName);
    expect(result.value).toBe(expected);
  });

  it("highlights " + languageName, () => {

    // read the test data from a file
    const sample = fs.readFileSync(
      path.resolve(__dirname, testFileSourcePath),
      "utf-8"
    );

    // highlight the test data
    const result = hljs.highlight(sample, { language: languageName, ignoreIllegals: true });
    expect(result.language).toBe(languageName);

    // verify the highlighting is what is expected
    const expected = fs.readFileSync(
      path.resolve(__dirname, testFileExpectedPath),
      "utf-8"
    );
    expect(result.value).toBe(expected);
  });
});
