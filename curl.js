/*
 Language: cURL
 Category: scripting
 Author: John Foster <jfoster@esri.com>
 Description: Syntax highlighting for cURL commands.
*/
var module = module ? module : {}; // shim for browser use

function hljsDefineCurl(hljs) {
  var KEYWORDS = {
    keyword:
      'curl'
  };
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      {
        className: 'variable',
        begin: /\$\(/, end: /\)/,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  var OPTION = {
    className: 'literal',
    begin: /--/, end: /[\s"]/,
    returnEnd: true
  };
  var OPTION_SINGLE = {
    className: 'literal',
    begin: /-\w/, end: /[\s"]/,
    returnEnd: true
  };
  var ESCAPED_QUOTE = {
    className: 'string',
    begin: /\\"/
  };
  var APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: hljs.C_NUMBER_RE }
    ],
    relevance: 0
  };
  
  return {
    aliases: ['curl'],
    keywords: KEYWORDS,
    contains: [
      OPTION,
      OPTION_SINGLE,
      QUOTE_STRING,
      ESCAPED_QUOTE,
      APOS_STRING,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      NUMBER
    ]
  };
}

module.exports = function(hljs) {
  hljs.registerLanguage("curl", hljsDefineCurl);
};
  
module.exports.definer = hljsDefineCurl;
