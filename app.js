const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const generateTemplate = require('./src/generatePage');

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

const promptAddEmployee = () => {
    return inquirer
      .prompt([
          {
              type: 'list',
              name: 'addEmployee',
              message: 'What employee role would you like to add to your team?',
              choices: ['Engineer', 'Intern']
          },
          {
              type: 'input',
              name: 'employeeName',
              message: "What is your employee's name?",
          },
          {
              type: 'input',
              name: 'employeeId',
              message: "What is your employee's employee ID number?"
              
          },
          {
              type: 'input',
              name: 'employeeEmail',
              message: "What is your employee's email address?"
          },
          {
              type: 'input',
              name: 'engineerGithub',
              message: "What is your engineer's GitHub username?",
              when: (input) => input.addEmployee === "Engineer"
          },
          {
              type: 'input',
              name: 'internSchool',
              message: "What school is your intern from?",
              when: (input) => input.addEmployee === "Intern"
          },
          {
              type: 'confirm',
              name: 'done',
              message: "Would you like to add another employee?",
              default: false
          }
      ])
      .then(employeeDetails => {
        let { done, addEmployee, employeeName, employeeId, employeeEmail, engineerGithub, internSchool } = employeeDetails;
        let employee = '';


        if (addEmployee === "Engineer") {
            employee = new Engineer(employeeName, employeeId, employeeEmail, engineerGithub);
        } else if (addEmployee === "Intern") {
            employee = new Intern(employeeName, employeeId, employeeEmail, internSchool);
        };

        team.push(employee);

        if (done === true) {
            return promptAddEmployee(team);
        } else {
            writeFile(team);
        };


      });
};

const writeFile = team => {
    fs.writeFile('./dist/index.html', generateTemplate(team), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your Team Roster has been created! Check out index.html in the dist folder!")
        }
    })
};

getManager()
  .then(promptAddEmployee)
  .then(team => {
      return generatePage(team)
  })
  then(generatedPage => {
      return writeFile(generatedPage)
  })
  .catch(err => {
      console.log(err);
  });
  