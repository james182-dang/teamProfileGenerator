const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager')

function Prompt() {
    this.manager = '',
    this.team = [];
}

Prompt.prototype.initializePrompt = function() {
    inquirer
      .prompt({
          type: 'text',
          name: 'name',
          message: "What is the Team Manager's name?"
      },
      {
          type: 'text',
          name: 'id',
          message: "What is the Team Manager's employee ID number?"
      },
      {
          type: 'text',
          name: 'email',
          message: "What is the Team Manager's email address?"
      },
      {
          type: 'text',
          name: 'office',
          message: "What is the Team Manager's office number?"
      })
      .then(({ name, id, email, office }) => {
          this.Manager = new Manager(name, id, email, office);
      })
      
}