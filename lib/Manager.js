// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

// sets the "manager" class to be a child of the parent "Employee" class with extends
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        //super allows access to the parent
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
   //functions to get data for each intern 
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;