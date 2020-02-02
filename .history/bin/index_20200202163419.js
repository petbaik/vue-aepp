#!/usr/bin/env node

var myLibrary = require('../index.js');

const argv = require('minimist')(process.argv.slice(2));
console.log(argv)
myLibrary.install();

