const files = require('./lib/files');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const error = require('./lib/error')
const inquirer  = require('./lib/inquirer');
const exec = require('child_process').exec;
const CLI = require('clui');
const Spinner = CLI.Spinner;

module.exports = {
    install: () => {
        clear();
        console.log(
            chalk.yellow(
                figlet.textSync('Vue Aepp', { horizontalLayout: 'full' })
            )
        );
    },
    async createProject (name)  {
        // if(files.directoryExists(name)) {
        //     error("Directory exists", true)
        // } else {
            
            const projectInfo = await inquirer.askProjectInfo(name);
            if(!projectInfo['project-name']) {
                projectInfo['project-name'] = name
            }
            files.createDirectory(name)
            const from = files.getPackageDirectoryBase()
            files.copy(`${from}/../template`,name, function() {
                const cwd = process.cwd() + "/" + name;
                const intall = new Spinner('Installing dependencies...');
                intall.start();
                exec("npm install", { cwd }, function(error, stdout, stderr) {
                    if(!error) {
                        console.log("Project created...");
                        console.log("cd " + name)
                        console.log("npm run dev")
                    }
                    intall.stop();
                })
            })
        // }
    }
};