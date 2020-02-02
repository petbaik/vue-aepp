const files = require('./lib/files');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const error = require('./lib/error')
const exec = require('child_process').exec;

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
        if(files.directoryExists(name)) {
            error("Directory exists", true)
        } else {
            files.createDirectory(name)
            const from = files.getPackageDirectoryBase()
            files.copy(`${from}/../template`,name, function() {
                exec("npm install", function(error, stdout, stderr) { 
                    console.log(error)
                    console.log(stdout)
                    console.log(stderr)
                })
            })
        }
    }
};