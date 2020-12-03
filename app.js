const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArray = [];   

function teamProfile(){
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
]};