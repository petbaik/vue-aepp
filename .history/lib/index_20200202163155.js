const files = require('./lib/files');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');


module.exports = {
    install: () => {
      return path.basename(process.cwd());
    }
};