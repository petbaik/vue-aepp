const fs = require('fs');
const path = require('path');
var fs = require("fs-extra");

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },
  createDirectory(dir) {
    fs.mkdirSync(dir);
  }
};