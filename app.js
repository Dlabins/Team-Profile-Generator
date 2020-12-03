const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// created empty teamArray to hold data
  
// function to ask the user questions about their position and other information
//function teamProfile(){
 const teamArray = []; 
 const internQuestions = [{
    type: "input",
    name: "name",
    message: "Please enter your name!"
}, {
    type: "input",
    name: "id",
    message: "Please enter your ID!"
}, {
    type: "input",
    name: "email",
    message: "Please enter your email address!"
}, {    
    
    type: "input",
    name: "school",
    message: "Please enter the school you attend!"
},
]

const managerQuestions = [{
    type: "input",
    name: "name",
    message: "Please enter your name!"
}, {
    type: "input",
    name: "id",
    message: "Please enter your ID!"
}, {
    type: "input",
    name: "email",
    message: "Please enter your email address!"
}, {    
    
    type: "input",
    name: "office number",
    message: "Please enter your office number!"
},
]

const engineerQuestions = [{
    type: "input",
    name: "name",
    message: "Please enter your name!"
}, {
    type: "input",
    name: "id",
    message: "Please enter your ID!"
}, {
    type: "input",
    name: "email",
    message: "Please enter your email address!"
}, {    
    
    type: "input",
    name: "github",
    message: "Please enter your github username!"
},
];
//functions for each position to take their answers to questions and push them into the empty teamArray
function createIntern(){
    inquirer.prompt(internQuestions).then((answers) => {
        const internEmployee = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamArray.push(internEmployee);
        addEmployeeObj();
    }
    )};

function createManager(){
    inquirer.prompt(managerQuestions).then((answers) => {
        const managerEmployee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamArray.push(managerEmployee);
        addEmployeeObj();
    }
    )};    

function createEngineer(){
    inquirer.prompt(engineerQuestions).then((answers) => {
        const engineerEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamArray.push(engineerEmployee);
        addEmployeeObj();
    }
    )};     
// function to render an html based on the data that was output to the teamArray array
function renderHtml(){
    fs.writeFile(outputPath, render(teamArray), {}, (e) => {
        if (e) {
            return;
        }
        console.log("Team Profile has been generated")
    });
}    
// function to add an emplyee object based on the position they hold
function addEmployeeObj(){
    inquirer.prompt([{
        type: "list",
        name: "position",
        message: "Which employee position would you like to add?",
        choices: ["Intern", "Manager", "Engineer", "No more positions to add"]
    }]).then((answer) => {
        if (answer.position === 'Intern'){
            createIntern();
        }
        else if (answer.position === "Manager"){
            createManager();
        }
        else if (answer.position === "Engineer"){
            createEngineer();
        }
        else if(answer.position === "No more positions to add") {
            renderHtml();
    }
})
}
// called functions to run the application
addEmployeeObj();
//teamProfile();