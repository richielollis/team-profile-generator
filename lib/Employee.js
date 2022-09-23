const inquirer = require("inquirer");

class Employee {
  constructor(name = "", id = "", email = "") {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  //   getName() {
  //     inquirer
  //       .prompt({
  //         type: "text",
  //         name: "name",
  //         message: "What is your name?",
  //       })
  //       .then(({ name }) => {
  //         this.name = name;
  //         console.log(name);
  //         this.getId();
  //       });
  //   }

  //   getId() {
  //     this.id = Math.floor(Math.random() * 4 + 1);
  //     inquirer.prompt({
  //       type: "confirm",
  //       name: "id",
  //       message: `Your Employee Id number is ${this.id}`,
  //     });
  //   }
}

module.exports = Employee;
