//create the variable and introduce Inquirer
const inquirer = require("inquirer");
const fs = require("fs");

const path = require("fs");

//create variable introduce createMarkdown.js file
var createMarkdown = require("./createMarkdown");

//need function to take user info
function writeFile(fileName, data) {

//initalize program
function init() {

//questions for command line prompts
    inquirer.prompt([
        {
            //enter project title
            type: "input",
            name: "title",
            message: "What is the name of your project?"
        },
        {
            //enter project description
            type: "input",
            name: "description",
            message: "Describe your project"
        },
        {
            //enter the installation instructions
            type: "input",
            name: "installation",
            message: "What are the Projects Installation Instructions?"
        },
        {
            //enter usage information
            type: "input",
            name: "usage",
            message: "Enter Usage Information"
        },
        {
            //enter contribution guidelines
            type: "input",
            name: "contribution",
            message: "Enter the project contribution guidelines"
        },
        {
            //enter test instructions
            type: "input",
            name: "tests",
            message: "Enter the test instructions"
        },
    ]).then(function(data)  {

    //
    writeToFile("README.md", createMarkdown({...data}));
    });    

//  call to initialize program
init()}}