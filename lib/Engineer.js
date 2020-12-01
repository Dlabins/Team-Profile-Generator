// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

// sets the "engineer" class to be a child of the parent "Employee" class with extends
class Engineer extends Employee {
    constructor (name, id, email, github){
        //super allows access to the parent
        super(name, id, email)
        this.github = github;
    }
   //functions to get data for each intern 
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;