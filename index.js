//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const path = require("fs");

//create variable introduce createMarkdown.js file
var generateMarkdown = require("./generateMarkdown");

//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Markdown file created')
    });   
}
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
        }
    ])

    .then(function(data) {
        
        // calling function 
        writeToFile("README.md", generateMarkdown({...data}));  
});
}
// function call to initialize program
init()