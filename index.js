"use strict";



//  E X P O R T

module.exports = exports = {
  env: {
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2019,
    sourceType: "module"
  },
  rules: {
    "comma-dangle": [
      "error",
      "never"
    ],
    curly: [
      "error",
      "multi-or-nest"
    ],
    "newline-per-chained-call": [
      "error", {
        ignoreChainWithDepth: 2
      }
    ],
    indent: [
      "error",
      2, {
        SwitchCase: 1
      }
    ],
    "keyword-spacing": [
      "error", {
        overrides: {
          catch: {
            after: false
          },
          switch: {
            after: false
          },
          while: {
            after: false
          }
        }
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-between-class-members": [
      "error",
      "always"
    ],
    "no-multiple-empty-lines": [
      "error", {
        max: 3,
        maxEOF: 1
      }
    ],
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error",
      "always", {
        objectsInObjects: false
      }
    ],
    "one-var": [
      "error", {
        initialized: "never"
      }
    ],
    "operator-linebreak": [
      "error",
      "after"
    ],
    "padding-line-between-statements": [
      "error", {
        blankLine: "always",
        next: "*",
        prev: [
          "const",
          "let",
          "var"
        ]
      }, {
        blankLine: "any",
        next: [
          "const",
          "let",
          "var"
        ],
        prev: [
          "const",
          "let",
          "var"
        ]
      }
    ],
    "quote-props": [
      "error",
      "as-needed"
    ],
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "always"
    ],
    "semi-spacing": "error",
    "sort-vars": [
      "error", {
        ignoreCase: true
      }
    ],
    "space-before-blocks": [
      "error", {
        classes: "always",
        functions: "always",
        keywords: "always"
      }
    ],
    "space-before-function-paren": [
      "error", {
        anonymous: "never",
        asyncArrow: "never",
        named: "never"
      }
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "space-unary-ops": [
      2, {
        nonwords: false,
        words: true
      }
    ],
    "spaced-comment": [
      "error",
      "always", {
        exceptions: ["-"]
      }
    ],
    "switch-colon-spacing": "error"
  }
};
