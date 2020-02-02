#!/usr/bin/env node

var package = require('../index.js');

const argv = require('minimist')(process.argv.slice(2));
const cmd = argv._[0]

package.createProject(cmd);

