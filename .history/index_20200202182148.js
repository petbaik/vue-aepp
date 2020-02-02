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
            console.log("Creating project directory...")
            files.createDirectory(name)
            const from = files.getPackageDirectoryBase()
            files.copy(`${from}/../template`,name, function() {
                const cwd = process.cwd() + "/" + name;
                console.log("Installing dependencies...")
                exec("npm install", { cwd }, function(error, stdout, stderr) {
                    if(!error) {
                        console.log("Project created...");
                        console.log("cd " + name)
                    }
                })
            })
        }
    }
};