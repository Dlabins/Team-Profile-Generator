// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

// sets the "intern" class to be a child of the parent "Employee" class with extends
class Intern extends Employee {
    constructor (name, id, email, school){
        //super allows access to the parent
        super(name, id, email)
        this.school = school;
    }
   //functions to get data for each intern 
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;