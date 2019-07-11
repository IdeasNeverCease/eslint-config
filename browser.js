"use strict";



//  P A C K A G E

const path = require("path");



//  E X P O R T

module.exports = exports = {
  env: {
    browser: true,
    node: false
  },
  extends: path.join(__dirname, "index.js")
};
