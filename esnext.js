"use strict";



//  P A C K A G E

const path = require("path");



//  E X P O R T

module.exports = exports = {
  extends: path.join(__dirname, "index.js"),
  rules: {
    "no-var": "error",
    "object-shorthand": [
      "error",
      "always"
    ],
    "prefer-arrow-callback": [
      "error", {
        allowNamedFunctions: true
      }
    ],
    "prefer-const": [
      "error", {
        destructuring: "all"
      }
    ],
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-destructuring": [
      "error", {
        AssignmentExpression: {
          array: false,

          // Disabled because object assignment destructuring requires parens wrapping:
          // `let foo; ({foo} = object);`
          object: false
        },
        // `array` is disabled because it forces destructuring on
        // stupid stuff like `foo.bar = process.argv[2];`
        // TODO: Open ESLint issue about this
        VariableDeclarator: {
          array: false,
          object: true
        }
      }, {
        enforceForRenamedProperties: false
      }
    ]
  }
};
