// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide project description'
    },
    {
        type:'input',
        name:'installation',
        message:'Provide installation instructions',
    },
    {
        type:'input',
        name:'usage',
        message:'Provide usage instructions',
    },
    {
        type:'input',
        name:'contributing',
        message:'Provide contribution guidelines',
    },
    {
        type:'input',
        name:'tests',
        message:'Provide test instructions',
    },
    {
        type:'input',
        name:'username',
        message:'Provide your GitHub username',
    },
    {
        type:'input',
        name:'email',
        message:'Provide your email address',
    },
    {
        type:'list',
        name:'license',
        message:'Choose a license',
        choices: ['MIT', 'Apache2.0', 'none']
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("README file created");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();
