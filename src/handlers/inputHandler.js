const { createProject } = require('../utils/createProject');
const { showAlert } = require('../screens/alertScreen');

/**
 * This function handles the input of a new project name.
 * @param {string} newProject - The name of the new project.
 * @param {object} projectManager - The project manager that manages the projects.
 * @param {object} screen - The screen where the alert will be displayed.
 * @param {object} list - The list of projects.
 */
function handleInput(newProject, projectManager, screen, list) {

    // Trim the new project name.
    const validatedProjectName = newProject.trim();

    // If the new project name is empty, show an alert and focus on the list.
    if (validatedProjectName <= 0) {
        showAlert(screen, `Please type a name for the new project`);
        list.focus()

    } else {
        // Get the selected projects from the project manager.
        const selectedProjects = projectManager.getSelectedProjects()
        // Combine the selected projects into a new project.
        const combineProjects = projectManager.combine(selectedProjects, newProject)
        // Create the new project.
        createProject(combineProjects)

        // Show an alert with the keys to exit.
        showAlert(screen, `keys | 'shift + q' | 'Ctrl + z' | 'esc' | to exit.`);
    }
}

module.exports = { handleInput };
