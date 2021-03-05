# highlightjs-curl

Support for using `highlight.js` to syntax highlight cURL commands. See https://highlightjs.org/ for more information about highlight.js. See https://curl.haxx.se/docs/manpage.html or in your shell use `curl --help` for more information about cURL.

## Usage

Include the `highlight.js` script package in your webpage or node app, load this module and register it with `hljs`. Follow instructions at [highlightjs](https://highlightjs.org/usage/) to learn how to include the library and CSS. See [Getting started](https://github.com/highlightjs/highlight.js#getting-started) for different integration and module options.

This cURL module is not part of the standard distribution and must be loaded separately. The module name is `curl.min.js` or `curl`, depending on how you reference the module from your bundler code.

Once loaded, mark the code you want to highlight with the `curl` class or `language-curl`:

```html
<pre><code class="curl">...</code></pre>
```

or

```html
<pre><code class="language-curl">...</code></pre>
```

## Building

To build the distribution, follow instructions at [Highlight.js 3rd Party Quick Start](https://github.com/highlightjs/highlight.js/blob/master/extra/3RD_PARTY_QUICK_START.md).

## Contributing

[Contributions welcome](https://github.com/esri/contributing). Download this repo and install the dependencies:

```bash
npm install
```

Update `src/language/curl.js`. Be sure to update the test data `spec/sample.txt` to include a test for your changes, or create a new test in `spec/curl-spec.js`. Run the local test with

```bash
npm test
```

The tests must pass!

If you change the test data be sure to also sync the update with the `test/markup` and `test/detect` files. These are used by the highlight.js 3rd party language build and distribution process.

Issue a pull request.

## License

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License"); you may not use this file except in compliance with the License.
