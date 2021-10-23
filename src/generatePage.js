const generateManager = function(manager) {
    return `
        <h1> Team Manager ${manager.name} </h1>
        </br>
        <p> Employee ID Number: ${manager.id} </p>
        </br>
        <p> Email: ${manager.email} </p>
        <p> Office Number ${manager.officeNumber} </p>
        </br>`
};

const generateEngineer = function(employee) {
    return `
        <h3> Engineer ${employee.employeeName} </h3>
        </br>
        <p> Employee ID Number: ${employee.employeeId} </p>
        </br>
        <p> Email: ${employee.employeeEmail} </p>
        </br>
        <p> GitHub profile: https://github.com/${employee.engineerGithub}
        </br>`
}

const generateIntern = function(intern) {
    return `
        <h3> Intern ${intern.employeeName} </h3>
        </br>
        <p> Employee ID Number: ${intern.employeeId} </p>
        </br>
        <p> Email: ${intern.employeeEmail} </p>
        </br>
        <p> School: ${intern.internSchool} </p>
        </br>`
};

const generatePage = (team) => {

    pageTemplate = [];

    for (let i=0; i < team.length; i++) {
        const employee = team[i];
        const type = employee.getType();

        if (type === 'Manager') {
            const managerTemplate = generateManager(employee);
            pageTemplate.push(managerTemplate);
        }

        if (type === 'Engineer') {
            const engineerTemplate = generateEngineer(employee);
            pageTemplate.push(engineerTemplate);
        }

        if (type === 'Intern') {
            const internTemplate = generateIntern(employee);
            pageTemplate.push(internTemplate);
        }
    }

    const employeeTemplate = pageTemplate.join('');

    const generateIndex = generateTemplate(employeeTemplate);
    return generateIndex; 
}

const generateTemplate = function(employeeTemplate) {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Roster</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="./assets/style.css">
        </head>
        <body>
            <header>
            </header>
            <main>
                ${employeeTemplate}
            </main>
        </body>
        </html>`

};

module.exports = generateTemplate, generateEngineer, generateIntern, generateManager, generatePage;