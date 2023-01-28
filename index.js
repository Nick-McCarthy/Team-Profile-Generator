const fs = require('fs');
const inquirer = require('inquirer');

//------------------------------------------ENGINEER------------------------------------------------------
function engineer() {
    inquirer
        .prompt(
            [
                {
                    type: 'input',
                    message: "What is the employees name?",
                    name: 'name',
                    choices: ['Add Engineer', 'Add Intern', 'Add Manager', 'Generate Page'],
                    validate: (value) => { if (value) { return true } else { return "Please input a value" } },
                },
                {
                    type: 'input',
                    message: "What is the employees id number?",
                    name: 'id',
                    validate: (value) => { if (value) { return true } else { return "Please input a value" } },
                },
                {
                    type: 'input',
                    message: "What is the employees gitHub user name?",
                    name: 'gitHub',
                    validate: (value) => { if (value) { return true } else { return "Please input a value" } },
                },
                {
                    type: 'input',
                    message: "What is the employees email?",
                    name: 'email',
                    validate: (value) => { if (value) { return true } else { return "Please input a value" } },
                },

            ])
        .then(({ name, id, gitHub, email }) => {

            mainMenu()
        })
        .catch((error) => {
            console.log(error)
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.log(error)
            } else {
                // Something else went wrong
                console.log("beats me hoss")
            }
        });
}

//------------------------------------------INTERN------------------------------------------------------
function intern() {
    inquirer
        .prompt(
            [
                {
                    type: 'input',
                    message: "What is the employees name?",
                    name: 'name',
                    choices: ['Add Engineer', 'Add Intern', 'Add Manager', 'Generate Page'],
                    validate: (value) => { if (value) { return true } else { return "Please input a value" } },
                },
                {
                    type: 'input',
                    message: "What is the employees id number?",
                    name: 'id',
                    validate: (value) => { if (value) { return true } else { return "Please input a value" } },
                },
                {
                    type: 'input',
                    message: "What is the employees school?",
                    name: 'school',
                    validate: (value) => { if (value) { return true } else { return "Please input a value" } },
                },
                {
                    type: 'input',
                    message: "What is the employees email?",
                    name: 'email',
                    validate: (value) => { if (value) { return true } else { return "Please input a value" } },
                },

            ])
        .then(({ name, id, school, email }) => {

            mainMenu()
        })
        .catch((error) => {
            console.log(error)
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.log(error)
            } else {
                // Something else went wrong
                console.log("beats me hoss")
            }
        });

}

//------------------------------------------MANAGER------------------------------------------------------
function manager() {
    inquirer
        .prompt(
            [
                {
                    type: 'input',
                    message: "What is the employees name?",
                    name: 'name',
                    choices: ['Add Engineer', 'Add Intern', 'Add Manager', 'Generate Page'],
                    validate: (value) => { if (value) { return true } else { return "Please input a value" } },
                },
                {
                    type: 'input',
                    message: "What is the employees id number?",
                    name: 'id',
                    validate: (value) => { if (value) { return true } else { return "Please input a value" } },
                },
                {
                    type: 'input',
                    message: "What is the employees phone number?",
                    name: 'phoneNumber',
                    validate: (value) => { if (value) { return true } else { return "Please input a value" } },
                },
                {
                    type: 'input',
                    message: "What is the employees email?",
                    name: 'email',
                    validate: (value) => { if (value) { return true } else { return "Please input a value" } },
                },

            ])
        .then(({ name, id, phoneNumber, email }) => {

            mainMenu()
        })
        .catch((error) => {
            console.log(error)
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.log(error)
            } else {
                // Something else went wrong
                console.log("beats me hoss")
            }
        });
}

//------------------------------------------GENERATE PAGE------------------------------------------------------
function generatePage() {
    console.log("possible logic")

}

//------------------------------------------MAIN------------------------------------------------------
function mainMenu() {
    inquirer
        .prompt(
            [
                {
                    type: 'list',
                    message: "What would you like to do?",
                    name: 'main',
                    choices: ['Add Engineer', 'Add Intern', 'Add Manager', 'Generate Page'],
                    validate: (value) => { if (value) { return true } else { return "Please input a value" } },
                },

            ])
        .then(({ main }) => {
            // Use user feedback 
            if (main === 'Add Engineer') {
                engineer()
            } else if (main === 'Add Intern') {
                intern();
            } else if (main === 'Add Manager') {
                manager();
            } else {
                generatePage();
            }
        })
        .catch((error) => {
            console.log(error)
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.log(error)
            } else {
                // Something else went wrong
                console.log("beats me hoss")
            }
        });
}

mainMenu()