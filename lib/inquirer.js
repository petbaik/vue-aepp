const inquirer = require('inquirer');

const files = require('./files');

module.exports = {
    askProjectInfo(name) {
        const questions = [
            {
              name: 'project-name',
              type: 'input',
              message: `Enter project name :`,
              default: name
            },
            {
                name: 'project-description',
                type: 'input',
                message: 'Enter project description:'
              }
        ]
        return inquirer.prompt(questions);
    }
}