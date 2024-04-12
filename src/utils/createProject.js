const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

/**
 * This function creates a new project with the given information.
 * @param {object} projectInfo - The information of the project to create.
 */
function createProject(projectInfo) {
    // Trim the project name.
    const projectName = projectInfo.name.trim();
    // Get the path of the project.
    const projectPath = path.join(process.cwd(), projectName);

    // If the project path does not exist, create it.
    if (!fs.existsSync(projectPath)) {
        fs.mkdirSync(projectPath);
    }

    // Create the package.json file for the project.
    const packageJson = {
        name: projectName,
        version: "1.0.0",
        description: "",
        main: "index.js",
        scripts: {
            test: "echo \"Error: no test specified\" && exit 1"
        },
        dependencies: projectInfo.dependencies
    };

    // Write the package.json file to the project path.
    fs.writeFileSync(path.join(projectPath, 'package.json'), JSON.stringify(packageJson, null, 2));

    // Log that the project was successfully created.
    console.log(`${projectName} ${chalk.green('successfully created.')} `);
}

module.exports = { createProject };
