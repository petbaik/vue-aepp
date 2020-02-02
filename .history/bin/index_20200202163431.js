#!/usr/bin/env node

var myLibrary = require('../index.js');

const argv = require('minimist')(process.argv.slice(2));

// myLibrary.install();
console.log(argv)

