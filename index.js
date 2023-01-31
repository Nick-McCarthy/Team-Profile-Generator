const fs = require('fs');
const inquirer = require('inquirer');

//--------------------------------------------VARS--------------------------------------------------------
htmlOpening = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<script>`;

htmlClosing = `</script>
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
            var employeeInclude = [name,id,gitHub,email];
            employeeList.push(employeeInclude);
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
            var employeeInclude = [name,id,school,email];
            employeeList.push(employeeInclude);
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
            var employeeInclude = [name,id,phoneNumber,email];
            employeeList.push(employeeInclude);
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
    var count = employee.length

    fs.writeFile('index.html', htmlOpening, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    while (i <= count) {
        fs.appendFile('index.html', ``,function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        i++;
    }

    fs.appendFile('index.html', htmlClosing, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    employeeList.length = 0;
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



