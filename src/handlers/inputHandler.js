const { createProject } = require('../utils/createProject');
const { showAlert } = require('../screens/alertScreen');

function handleInput(nombreNuevoProyecto, projectManager, screen) {

    const selectedProjects = projectManager.getSelectedProjects()
    const combineProjects = projectManager.combine(selectedProjects, nombreNuevoProyecto)
    createProject(combineProjects)

    // Muestra un mensaje indicando que se puede presionar cualquier tecla para salir
    showAlert(screen, `Presione 'shift + q' | 'Ctrl + z' | 'escape' para salir.`);

}

module.exports = { handleInput };
