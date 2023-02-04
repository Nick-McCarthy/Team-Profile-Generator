const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./classes/manager');
const Engineer = require('./classes/engineer');
const Intern = require('./classes/intern');

//--------------------------------------------VARS--------------------------------------------------------
var htmlOpening = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
<div class = "container-fluid">
    <header>Development Team</header>
    <div class = "col-12">
        <div class="row" id="employeeRow">`;

var htmlClosing = `
        </div>
    </div>
</div>
</body>
</html>`;

var employeeList = [];

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
            var newEngineer = new Engineer(name, id, email, gitHub);
            console.log(newEngineer);

            employeeList.push(newEngineer);
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
            var newIntern = new Intern(name, id, email, school);
            console.log(newIntern);
            employeeList.push(newIntern);
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
            var newManager = new Manager(name, id, email, phoneNumber);
            console.log(newManager);
            employeeList.push(newManager);
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
//------------------------------------------CREATE CONTENT------------------------------------------------------
function createContent() {
    var htmlText = htmlOpening
    var employeeCount = employeeList.length
    var i = 0;
    console.log(employeeList)
    while (i < employeeCount) {
        console.log(employeeList[i].getRole())
        if (employeeList[i].getRole().toString() === "Engineer") {
            htmlText += `
                <div class="card" style="width: 25%">
                    <div class="card-body">
                        <ul class="devMember list-group list-group-flush">
                            <li class="list-group-item">Name: ${employeeList[i].name}</li>
                            <li class="list-group-item">ID: ${employeeList[i].id}</li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${employeeList[i].gitHub}">${employeeList[i].gitHub}</a></li>
                            <li class="list-group-item">Email: <a href="mailto:${employeeList[i].email}">${employeeList[i].email}</a></li>
                        </ul>
                    </div>
                </div>`
            console.log(i)
            i++

        } else if (employeeList[i].getRole().toString() === "Manager") {
            htmlText += `
                <div class="card" style="width: 25%">
                    <div class="card-body">
                        <ul class="devMember list-group list-group-flush">
                            <li class="list-group-item">Name: ${employeeList[i].name}</li>
                            <li class="list-group-item">ID: ${employeeList[i].id}</li>
                            <li class="list-group-item">Phone Number: ${employeeList[i].phoneNumber}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employeeList[i].email}">${employeeList[i].email}</a></li>
                        </ul>
                    </div>
                </div>`
            console.log(i)
            i++

        } else if (employeeList[i].getRole().toString() === "Intern") {
            htmlText += `
                <div class="card" style="width: 25%">
                    <div class="card-body">
                        <ul class="devMember list-group list-group-flush">
                            <li class="list-group-item">Name: ${employeeList[i].name}</li>
                            <li class="list-group-item">ID: ${employeeList[i].id}</li>
                            <li class="list-group-item">School: ${employeeList[i].school}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employeeList[i].email}">${employeeList[i].email}</a></li>
                        </ul>
                    </div>
                </div>`
            console.log(i)
            i++

        } else {
            console.log('No Hit')
        }
    }
    htmlText += htmlClosing
    console.log(htmlText);
    employeeList.length = 0;
    return htmlText
}
//-------------------------------------------- GENERATE PAGE ---------------------------------------------------------------------
function generatePage(content) {
    fs.writeFile('index.html', content, function (err) {
        if (err) throw err;
        console.log('File Created');
    });
};


//-------------------------------------------------- MAIN ------------------------------------------------------------------------
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
                var content1 = createContent()
                generatePage(content1);
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
//----- if name == main -----
mainMenu()



