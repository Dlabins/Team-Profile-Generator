// TODO: Write code to define and export the Employee class
//Created "Employee" class and defined its elements as name, id, and email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
// Functions to return data for each employee
getName() {
    return this.name;
}
getId(){
    return this.id;
}
getEmail(){
    return this.email;
}
getRole() {
    return "Employee";
}
}
module.exports = Employee;