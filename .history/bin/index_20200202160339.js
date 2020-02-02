#!/usr/bin/env node

var args = process.argv.splice(process.execArgv.length + 2);

var name = args[0];

var myLibrary = require('../lib/index.js');

myLibrary.say("Hello " + name);

var fs = require('fs');
var dir = './tmp';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}