const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub
    }
    getgitHub() {
        return gitHub
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer