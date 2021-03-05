/*
 Language: cURL
 Category: scripting
 Author: John Foster <jfoster@esri.com>
 Description: Syntax highlighting for cURL commands.
*/

module.exports = function (hljs) {
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
  var OPTION_REQUEST = {
    className: 'literal',
    begin: /(--request|-X)\s/,
    contains: [
      {
        className: 'symbol',
        begin: /(get|post|delete|options|head|put|patch|trace|connect)/,
        end: /\s/,
        returnEnd: true
      }
    ],
    returnEnd: true,
    relevance: 10
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
    name: "curl",
    aliases: ["curl"],
    keywords: "curl",
    case_insensitive: true,
    contains: [
      OPTION_REQUEST,
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
