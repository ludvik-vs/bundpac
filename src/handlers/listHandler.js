const chalk = require('chalk');
const { showAlert } = require('../screens/alertScreen');
const { createLabelScreen } = require('../screens/labelScreen');
const { createInputScreen } = require('../screens/inputScreen');

/**
 * This function handles the interaction with the list of projects.
 * @param {object} list - The list of projects.
 * @param {object} projectsManager - The project manager that manages the projects.
 * @param {object} screen - The screen where the list is displayed.
 */
function handleList(list, projectsManager, screen) {

    // Handle the 'space' key press.
    list.key('space', () => {
        // Get the index of the selected project.
        const selectedIndex = list.selected;
        // Get all projects from the project manager.
        const callAllProjects = projectsManager.getAllProjects()
        // Get the values of all projects.
        const projectsValues = Object.values(callAllProjects);
        // Get the name of the selected project.
        const projectName = projectsValues[selectedIndex].name

        try {
            // Toggle the selected status of the project.
            projectsManager.toggleSelected(projectName)

        } catch (e) {
            // Show an alert if an error occurs.
            showAlert(screen, e)

        } finally {
            // Get the updated values of the project.
            const updatedValues = projectsManager.getProject(projectName)
            // Get the count of dependencies of the project.
            const projectDependencies = Object.keys(updatedValues.dependencies).length
            // Get the selected status of the project.
            const isSelectedStatus = updatedValues.isSelected
            // Update the item in the list.
            list.setItem(selectedIndex, `${chalk.magenta.bgBlack('Project name: ')}${projectName} ==> # dependencies: (${projectDependencies}) ${isSelectedStatus ? chalk.blue.bgGreen('Selected') : chalk.yellow.bgRed('No selected')}`);
            // Render the screen.
            screen.render();
        }

    });

    // Handle the 'enter' key press.
    list.key('enter', () => {
        // Get all projects from the project manager.
        const callAllProjects = projectsManager.getAllProjects()
        // Get the count of selected projects.
        const selectedProjectsCount = Object.values(callAllProjects).filter(project => project.isSelected).length;

        // If at least two projects are selected, create a label screen and an input screen.
        if (selectedProjectsCount >= 2) {
            createLabelScreen(screen)
            const input = createInputScreen(screen, projectsManager, list)
            input.focus()

        } else {
            // If less than two projects are selected, focus on the list and show an alert.
            list.focus()
            showAlert(screen, "Select two o more projects")
        }

        // Render the screen.
        screen.render();
    });

}

module.exports = { handleList };
