const chalk = require('chalk');
const { showAlert } = require('../screens/alertScreen');
const { createLabelScreen } = require('../screens/labelScreen');
const { createInputScreen } = require('../screens/inputScreen');

function handleList(list, projectsManager, screen) {

    list.key('space', () => {
        const selectedIndex = list.selected;
        const callAllProjects = projectsManager.getAllProjects()
        const projectsValues = Object.values(callAllProjects);
        const projectName = projectsValues[selectedIndex].name
        
        try{
            projectsManager.toggleSelected(projectName)

        }catch(e){
            showAlert(screen, e)    

        }finally{
            const updatedValues = projectsManager.getProject(projectName)
            const projectDependencies = Object.keys(updatedValues.dependencies).length
            const isSelectedStatus = updatedValues.isSelected
            list.setItem(selectedIndex, `${chalk.magenta.bgBlack('Project name: ')}${projectName} ==> # dependencies: (${projectDependencies}) ${isSelectedStatus ? chalk.blue.bgGreen('Selected to join') : chalk.yellow.bgRed('No selected')}`);
            screen.render();
        }

    });

    list.key('enter', () => {
        const callAllProjects = projectsManager.getAllProjects()
        const selectedProjectsCount = Object.values(callAllProjects).filter(project => project.isSelected).length;

        if (selectedProjectsCount >= 2){
            createLabelScreen(screen)
            const input = createInputScreen(screen, projectsManager)
            input.focus()

        } else{
            list.focus()
            showAlert(screen, "Select two o more projects")
        }

        screen.render();
    });

}

module.exports = { handleList };
