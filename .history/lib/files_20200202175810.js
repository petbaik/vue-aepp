const fs = require('fs');
const path = require('path');
const fsExtra = require("fs-extra");
const error = require('./lib/error')

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },
  createDirectory(dir) {
    fs.mkdirSync(dir);
  },
  copy(from,to) {
    fsExtra.copy(from, to, function (err) {

    });
  }
};