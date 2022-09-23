const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    inquirer
      .prompt({
        type: "text",
        name: "name",
        message: "What is your name?",
      })
      .then(({ name }) => {
        this.name = name;
        console.log(this.name);
        this.getId();
      });
  }

  getId() {
    this.id = Math.floor(Math.random() * 4000 + 1);
    inquirer
      .prompt({
        type: "list",
        name: "id",
        message: `Welcome aboard ${this.name}! Your Employee Id number is ${this.id}.`,
        choices: ["Ok"],
      })
      .then(() => {
        this.getEmail();
      });
  }

  getEmail() {
    inquirer
      .prompt({
        type: "text",
        name: "email",
        message: `What is your email?`,
      })
      .then(({ email }) => {
        this.email = email;
        console.log(this.email);
        this.getRole();
      });
  }

  getRole() {
    inquirer
      .prompt({
        type: "list",
        name: "role",
        message: `What is your role here with us?`,
        choices: ["Intern", "Engineer", "Manager"],
      })
      .then(({ role }) => {
        this.role = role;
        console.log(this.role);
      });
  }
}

module.exports = Employee;
