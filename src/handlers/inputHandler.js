const { createProject } = require('../utils/createProject');
const { showAlert } = require('../screens/alertScreen');

function handleInput(newProject, projectManager, screen, list) {

    const validatedProjectName = newProject.trim();

    if (validatedProjectName <= 0){
        showAlert(screen, `Please type a name for the new project`);
        list.focus()
        
    } else{
        const selectedProjects = projectManager.getSelectedProjects()
        const combineProjects = projectManager.combine(selectedProjects, newProject)
        createProject(combineProjects)
    
        showAlert(screen, `keys | 'shift + q' | 'Ctrl + z' | 'esc' | to exit.`);
    }


}

module.exports = { handleInput };
