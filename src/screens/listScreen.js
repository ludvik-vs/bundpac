const blessed = require('blessed');
const chalk = require('chalk');

/**
 * This function creates a list screen that displays all projects managed by the given project manager.
 * @param {object} screen - The screen where the list will be displayed.
 * @param {object} projectsManager - The project manager that manages the projects to be displayed.
 * @returns {object} The created list.
 */
function CreateListScreen(screen, projectsManager) {

    // Get all projects from the project manager.
    const projects = projectsManager.getAllProjects()

    // Get the names of all projects.
    const projectNames = Object.keys(projects);

    // Create a list.
    const list = blessed.list({
        top: '40%',
        left: 'center',
        width: '100%',
        height: '25%',
        items: projectNames.map(projectName => {
            // Get the project.
            const project = projects[projectName];
            // Get the count of dependencies of the project.
            const dependenciesCount = project.dependencies ? Object.keys(project.dependencies).length : 0;
            // Create a row for the project.
            const row = `|${chalk.magenta.bgBlack('Project name: ')}${project.name} || No. Dependencies: (${dependenciesCount}) ||${project.selected ? chalk.blue.bgGreen.bold('Selected') : chalk.yellow.bgRed.bold('No selected')}||`
            return row;
        }),
        keys: true,
        vi: true,
        border: {
            type: 'line'
        },
        style: {
            selected: {
                blink: false,
                underline: true,
            }
        }
    });

    // Append the list to the screen.
    screen.append(list);

    // Render the screen.
    screen.render();

    // Return the created list.
    return list;
}

module.exports = { CreateListScreen };
