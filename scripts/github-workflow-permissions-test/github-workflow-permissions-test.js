'use strict';

var kolmafia = require('kolmafia');

function main() {
  kolmafia.print("You have successfully built github-workflow-permissions-test!");
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  kolmafia.printHtml("You called it with <code>".concat(args, "</code>."));
}

exports.main = main;
