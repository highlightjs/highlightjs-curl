# highlightjs-curl

Support for using `highlight.js` to syntax highlight cURL commands. See https://highlightjs.org/ for more information about highlight.js.

Updated to highlight version 10.6.

See https://curl.haxx.se/docs/manpage.html or in your shell use `curl --help` for more information about cURL.

## Usage

Include the `highlight.js` script package in your webpage or node app, load this module and register it with `hljs`. Follow instructions at [highlightjs](https://highlightjs.org/) to learn how to include the library and CSS.

If you're not using a build system and just want to embed this in your webpage:

```html
<link rel="stylesheet" href="/path/to/highlight-styles/default.css">
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/highlightjs-curl.min.js"></script>
<script type="text/javascript">
    hljs.registerLanguage('curl', window.hljsDefineCurl);
    hljs.initHighlightingOnLoad();
</script>
```

If you're using webpack / rollup / browserify / node:

```javascript
var hljs = require('highlightjs');
var hljsDefineCUrl = require('highlightjs-curl');

hljsDefineCurl(hljs);
hljs.initHighlightingOnLoad();
```

Mark the code you want to highlight with the curl class:

```html
<pre><code class="curl">...</code></pre>
```

or use JavaScript to dynamically highlight text:

```javascript
hljs.registerLanguage('curl', window.hljsDefineCurl);
var highlighted = hljs.highlightAuto(text, ["curl"]);
```

## Building

To build the distribution, follow instructions at https://github.com/highlightjs/highlight.js/blob/master/extra/3RD_PARTY_QUICK_START.md

## Contributing

[Contributions welcome](https://github.com/esri/contributing). Download this repo and install the dependencies:

```bash
npm install
```

Update `curl.js`. Be sure to update the test data `input.txt` to include a test for your changes, or create a new test in `curl-spec.js`. The tests must pass!

```bash
npm test
```

Issue a pull request.

## License

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License"); you may not use this file except in compliance with the License.
