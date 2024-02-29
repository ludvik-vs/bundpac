const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function createProject(projectInfo) {
    const projectName = projectInfo.name.trim();
    const projectPath = path.join(process.cwd(), projectName);

    if (!fs.existsSync(projectPath)) {
        fs.mkdirSync(projectPath);
    }

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

    fs.writeFileSync(path.join(projectPath, 'package.json'), JSON.stringify(packageJson, null, 2));

    console.log(`${projectName} ${chalk.green('successfully created.')} `);
}

module.exports = { createProject };
