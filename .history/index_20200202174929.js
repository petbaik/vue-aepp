const files = require('./lib/files');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');


module.exports = {
    install: () => {
        clear();

        console.log(
            chalk.yellow(
                figlet.textSync('Vue Aepp', { horizontalLayout: 'full' })
            )
        );
    }
};