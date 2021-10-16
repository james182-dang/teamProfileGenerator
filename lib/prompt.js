const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager')
const Intern = require('./Intern');
const Engineer = require('./Engineer');


function Prompt() {
    this.Manager = '',
    this.team = [];
}

Prompt.prototype.initializePrompt = function() {
    inquirer
      .prompt([
      {
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
      }])
      .then(({ name, id, email, office }) => {
          this.Manager = new Manager(name, id, email, office);
          team.push(this.Manager);
      },
        inquirer
          .prompt([
              {
                  type: 'list',
                  name: 'add',
                  message: 'Would you like to add members to your team?',
                  choices: ['Add an Engineer', 'Add an Intern', 'No, finish building my team.']
              }
          ])
          .then(({ add }) => {
              if (add = 'Add an Engineer') {
                inquirer
                  .prompt([
                      {
                          type: 'text',
                          name: 'engineerName',
                          message: 'What is your engineers name?'
                      },
                      {
                          type: 'text',
                          name: 'engineerID',
                          message: "What is your engineer's employee ID number?"
                      },
                      {
                          type: 'text',
                          name: 'engineerEmail',
                          message: "What is your engineer's email address?"
                      },
                      {
                          type: 'text',
                          name: 'engineerGithub',
                          message: "What is your engineer's github username?"
                      }
                  ])
                  .then(( { engineerName, engineerID, engineerEmail, engineerGithub }) => {
                      this.Engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);
                      team.push(this.Engineer);
                  })
              } else if (add = 'Add an Intern') {
                inquirer
                  .prompt([
                      {
                          type: 'text',
                          name: 'internName',
                          message: "What is your intern's name?"
                      },
                      {
                          type: 'text',
                          name: 'internID',
                          message: "What is your intern's employee ID number?"
                      },
                      {
                          type: 'text',
                          name: 'internEmail',
                          message: "What is your intern's email address?"
                      },
                      {
                          type: 'text',
                          name: 'internSchool',
                          message: "What school is your intern from?"
                      }
                  ])
                  .then(({ internName, internID, internEmail, internSchool}) => {
                      this.intern = new Intern(internName, internID, internEmail, internSchool);
                      team.push(this.Intern);
                  })
              } else {
                return;
              }
          }))
    
}

module.exports = Prompt;