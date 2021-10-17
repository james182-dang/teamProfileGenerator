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
        <h3> Engineer ${employee.name} </h3>
        </br>
        <p> Employee ID Number: ${employee.id} </p>
        </br>
        <p> Email: ${employee.email} </p>
        </br>
        <p> GitHub profile: https://github.com/${employee.github}
        </br>`
}

const generateIntern = function(intern) {
    return `
        <h3> Intern ${employee.name} </h3>
        </br>
        <p> Employee ID Number: ${employee.id} </p>
        </br>
        <p> Email: ${employee.email} </p>
        </br>
        <p> School: ${employee.school} </p>
        </br>`
};

const generateTemplate = function() {
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
    
        </body>
        </html>`

};

module.exports = generatePage;