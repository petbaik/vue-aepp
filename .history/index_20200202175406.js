const files = require('./lib/files');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const error = require('./utils/error')

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
            
        }
    }
};