// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide project description'
    },
    {
        type:'input',
        name:'Installation',
        message:'Provide installation instructions',
    },
    {
        type:'input',
        name:'Usage',
        message:'Provide usage instructions',
    },
    {
        type:'input',
        name:'Contributing',
        message:'Provide contribution guidelines',
    },
    {
        type:'input',
        name:'Tests',
        message:'Provide',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
