const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, phoneNumber) {
        super(name, id, email)
        this.phoneNumber = phoneNumber
    }
    getNumber() {
        return phoneNumber
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager