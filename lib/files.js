const fs = require('fs');
const path = require('path');
const fsExtra = require("fs-extra");
const error = require('./error')

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },
  getPackageDirectoryBase(){
    return path.dirname(fs.realpathSync(__filename));
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },
  createDirectory(dir) {
    fs.mkdirSync(dir);
  },
  copy(from,to, cb) {
    fsExtra.copy(from, to, function (err) {
      if(err) {
         error(err, true)
      } else {
        cb()
      }
    });
  }
};