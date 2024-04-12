const fs = require('fs');
const path = require('path');
const Project = require('../models/Project');

/**
 * This function finds all NPM projects in a given directory and adds them to a project manager.
 * @param {string} directory - The directory to search for NPM projects.
 * @param {object} projectManager - The project manager to which the found projects will be added.
 * @returns {object} The project manager with all the found projects.
 */
function FindNpmProjects(directory, projectManager) {

    // Read all files and directories from the given directory.
    const files = fs.readdirSync(directory, { withFileTypes: true });

    // Iterate over each file/directory.
    files.forEach((file) => {
        // Get the full path of the file/directory.
        const fullPath = path.join(directory, file.name);

        // Check if the file is a directory.
        if (file.isDirectory()) {
            // Construct the path to the package.json file in the directory.
            const packageJsonPath = path.join(fullPath, 'package.json');

            // Check if the package.json file exists in the directory.
            if (fs.existsSync(packageJsonPath)) {
                // If it exists, read the package.json file and parse it as JSON.
                const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
                // Create a new Project instance with the name and dependencies from the package.json file.
                const project = new Project(packageJson.name, packageJson.dependencies || {});
                // Add the project to the project manager.
                projectManager.addProject(project);
            }
        }
    });

    // Return the project manager with all the found projects.
    return projectManager;
}

module.exports = { FindNpmProjects };
