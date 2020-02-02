const files = require('./lib/files');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const error = require('./lib/error')

module.exports = {
    install: () => {
        clear();
        console.log(
            chalk.yellow(
                figlet.textSync('Vue Aepp', { horizontalLayout: 'full' })
            )
        );
    },
    createProject: (name)  => {
        // if(files.directoryExists(name)) {
        //     error("Directory exists", true)
        // } else {
            files.createDirectory(name)
            const from = files.getPackageDirectoryBase()
            const to = files.getCurrentDirectoryBase()
            console.log(to)
            // files.copy(`${from}/../template`,to)
        // }
    }
};