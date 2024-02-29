const { createProject } = require('../utils/createProject');
const { showAlert } = require('../screens/alertScreen');

function handleInput(nombreNuevoProyecto, projectManager, screen) {

    const selectedProjects = projectManager.getSelectedProjects()
    const combineProjects = projectManager.combine(selectedProjects, nombreNuevoProyecto)
    createProject(combineProjects)

    showAlert(screen, `keys | 'shift + q' | 'Ctrl + z' | 'esc' | to exit.`);

}

module.exports = { handleInput };
