const blessed = require('blessed');
const chalk = require('chalk');

// Función para configurar y mostrar la lista de proyectos en la pantalla
function CreateListScreen(screen, projectsManager) {

    const projects = projectsManager.getAllProjects()

    const projectNames = Object.keys(projects);




    // Crea una lista blessed
    const list = blessed.list({
        top: '40%',
        left: 'center',
        width: '100%',
        height: '25%',
        items: projectNames.map(projectName => {
            const project = projects[projectName];
            const dependenciesCount = project.dependencies ? Object.keys(project.dependencies).length : 0;
            const row = `${chalk.magenta.bgBlack('Project name: ')}${project.name} ==> # dependencies: (${dependenciesCount})  ==> ${project.selected ? chalk.blue.bgGreen.bold('Selected') : chalk.yellow.bgRed.bold('No selected')}`
            return row;
        }),
        keys: true,
        vi: true,
        border:{
            type: 'line'
        },
        style: {
            selected: {
                blink: false,
                underline: true,
            }
        }
    });

    // Añade la lista a la pantalla
    screen.append(list);

    // Render List in Screen
    screen.render();

    return list;
}

module.exports = { CreateListScreen };
