#!/usr/bin/env node

var myLibrary = require('../index.js');

const argv = require('minimist')(process.argv);
const cmd = argv._[0]

// myLibrary.install();
console.log(argv )

