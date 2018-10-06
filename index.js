"use strict";



//  E X P O R T

module.exports = exports = { // TODO: Export `.eslintrc` here
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "linebreak-style": ["error", "unix"],
    "no-multiple-empty-lines": ["error", { "max": 3, "maxEOF": 1 }]
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
  }
};
