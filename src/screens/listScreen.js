const blessed = require('blessed');
const chalk = require('chalk');

function CreateListScreen(screen, projectsManager) {

    const projects = projectsManager.getAllProjects()

    const projectNames = Object.keys(projects);

    const list = blessed.list({
        top: '40%',
        left: 'center',
        width: '100%',
        height: '25%',
        items: projectNames.map(projectName => {
            const project = projects[projectName];
            const dependenciesCount = project.dependencies ? Object.keys(project.dependencies).length : 0;
            const row = `|${chalk.magenta.bgBlack('Project name: ')}${project.name} || No. Dependencies: (${dependenciesCount}) ||${project.selected ? chalk.blue.bgGreen.bold('Selected') : chalk.yellow.bgRed.bold('No selected')}||`
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

    screen.append(list);

    screen.render();

    return list;
}

module.exports = { CreateListScreen };
