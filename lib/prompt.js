const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager')
const Intern = require('./Intern');
const Engineer = require('./Engineer');


const team = [];

const getManager = () => {
    return inquirer
      .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is your Team Manager's name?",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log("Please enter your Team Manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is your Team Manager's employee ID number?",
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log("Please enter your Team Manager's employee ID number.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your Team Manager's email address?",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Please enter your Team Manager's email address.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is your Team Manager's office number?",
            validate: managerOffice => {
                if (managerOffice) {
                    return true;
                } else {
                    console.log("Please enter your Team Manager's office number.");
                    return false;
                }
            }
        }
      ])
      .then(managerDetails => {
          const { managerName, managerId, managerEmail, managerOffice } = managerDetails;
          const manager = new Manager(managerName, managerId, managerEmail, managerOffice);

          team.push(manager);
      })
}

const promptIntern = () => {
    return Promise.resolve([
        {
            type: 'input',
            name: 'internName',
            message: "What is your intern's name?"
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is your intern's employee ID number?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is your intern's email address?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "From what school is your intern from?"
        }
    ])
    .then(({ internName, internId, internEmail, internSchool }) => {
        this.Intern = new Intern(internName, internId, internEmail, internSchool);
        team.push(this.Intern);
    })
}

const promptEngineer = () => {
    return Promise.resolve([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is your engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is your engineer's employee ID number?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is your engineer's email address?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is your engineer's GitHub profile link?"
        }
    ])
    .then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
        this.Engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        team.push(this.Engineer);
    })
};

async function PromptUser() {
    const getManager = await inquirer.prompt()
    const promptEngineer = await promptEngineer();
    const promptIntern = await promptIntern();
}





Prompt.prototype.initializePrompt = function() {
    inquirer
      .prompt([
      {
          type: 'text',
          name: 'name',
          message: "What is the Team Manager's name? (Required)",
          validate: managerInput => {
              if (managerInput) {
                  return true;
              } else {
                  console.log("Please enter the Team Manager's name.");
                  return false;
              }
          }
      },
      {
          type: 'text',
          name: 'id',
          message: "What is the Team Manager's employee ID number? (Required)",
          validate: managerId => {
              if (managerId) {
                  return true;
              } else {
                  console.log("Please enter your Team Manager's employee ID number.");
                  return false;
              }
          }
      },
      {
          type: 'text',
          name: 'email',
          message: "What is the Team Manager's email address?",
          validate: managerEmail => {
              if (managerEmail) {
                  return true;
              } else {
                  console.log("Please enter your Team Manager's email address.");
                  return false;
              }
          }
      },
      {
          type: 'text',
          name: 'office',
          message: "What is the Team Manager's office number? (Required)",
          validate: managerOffice => {
              if (managerOffice) {
                  return true;
              } else {
                  console.log("Please enter your Team Manager's office number.");
                  return false;
              }
          }
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
              inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'engineerName',
                        message: "What is your engineer's name?",

                    }
                ])
          })
      )};
    


Prompt.prototype.initializeEngineer = function() {
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
};

Prompt.prototype.initializeIntern = function() {
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
}

module.exports = Prompt, PromptUser(), promptEngineer(), promptIntern();