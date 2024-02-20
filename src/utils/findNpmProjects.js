const fs = require('fs');
const path = require('path');
const Project = require('../models/Project');

function FindNpmProjects(directory, projectManager) {

    const files = fs.readdirSync(directory, { withFileTypes: true });

    files.forEach((file) => {
        const fullPath = path.join(directory, file.name);

        if (file.isDirectory()) {
            const packageJsonPath = path.join(fullPath, 'package.json');

            if (fs.existsSync(packageJsonPath)) {
                const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
                const project = new Project(packageJson.name, packageJson.dependencies || {});
                projectManager.addProject(project);
            }
        }
    });

    return projectManager;
}

module.exports = { FindNpmProjects };
