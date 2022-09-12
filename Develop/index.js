const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');
const inquirer = require('inquirer');


const questions = [

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      {
        type: 'input',
        name: 'title',
        message: "What is the name of your project?"
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project'
      },
      {
        type: 'list',
        name: 'languages',
        message: 'What kind of languages did you use for the project?',
        choices: ['HTML', 'CSS', 'Javascript', 'Node', 'JSON']
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },
      {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test'
      }

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

function init() {
    inquirer.prompt(questions).then(inquirerResponse => {
        console.log('Generating Readme...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponse}));
    });
};

init();
