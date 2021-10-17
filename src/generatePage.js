const generateManager = function(manager) {
    return `
        <h1> Team Manager ${employee.name} </h1>
        </br>
        <p> Employee ID Number: ${employee.id} </p>
        </br>
        <p> Email: ${employee.email} </p>
        <p> Office Number ${employee.officeNumber} </p>
        </br>`
};

const generateEngineer = function(engineer) {
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
        <h3> Intern ${employee.employeeName} </h3>
        </br>
        <p> Employee ID Number: ${employee.employeeId} </p>
        </br>
        <p> Email: ${employee.employeeEmail} </p>
        </br>
        <p> School: ${employee.internSchool} </p>
        </br>`
};

generatePage = (data) => {

    pageTemplate = [];

    for (let i=0; i < data.length; i++) {
        const employee = data[i];
        const type = employee.getType();

        if (type === 'Manager') {
            const managerTemplate = generateManager(employee);
            pageTemplate.push(managerTemplate);
        } else if (type === 'Engineer') {
            const engineerTemplate = generateEngineer(employee);
            pageTemplate.push(engineerTemplate);
        } else if (type === 'Intern') {
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

module.exports = generateTemplate, generateManager, generateIntern, generateEngineer;