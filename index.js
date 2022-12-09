const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const pageTemplate = require("./src/template");

const team = [];

// prompts asking for info
const addRole = [
  {
    type: "list",
    name: "roleChoice",
    message: "What employee role would you like to add?",
    choices: ["Manager", "Engineer", "Intern", "Exit"],
  },
];

// add manager
const managerQs = [
  {
    type: "input",
    name: "employeeName",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is the manager's ID number?",
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];

// add engineer
const engineerQs = [
  {
    type: "input",
    name: "employeeName",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is the engineer's ID number?",
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What is the engineer's email?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is the engineer's GitHub Username?",
  },
];

// add intern
const internQs = [
  {
    type: "input",
    name: "employeeName",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is the intern's ID number?",
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What is the intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What school is the intern current enrolled in?",
  },
];

// generate data
function init() {
  inquirer.prompt(addRole).then((data) => {
    switch (data.roleChoice) {
      case "Manager":
        addManager();
        break;
      case "Intern":
        addIntern();
        break;
      case "Engineer":
        addEngineer();
        break;
      default:
        buildHTML();
    }
  });
}

// sort data by role
function addEngineer() {
  inquirer.prompt(engineerQs).then((data) => {
    let engineer = new Engineer(
      data.employeeName,
      data.employeeId,
      data.employeeEmail,
      data.gitHub
    );
    team.push(engineer);
    init();
  });
}

function addIntern() {
  inquirer.prompt(internQs).then((data) => {
    let intern = new Intern(
      data.employeeName,
      data.employeeId,
      data.employeeEmail,
      data.school
    );
    team.push(intern);
    init();
  });
}

function addManager() {
  inquirer.prompt(managerQs).then((data) => {
    let manager = new Manager(
      data.employeeName,
      data.employeeId,
      data.employeeEmail,
      data.officeNumber
    );
    team.push(manager);
    init();
  });
}

// build html
function buildHTML() {
  fs.writeFileSync("./dist/team.html", pageTemplate(team), "utf-8");
}

init();
