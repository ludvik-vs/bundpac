const blessed = require('blessed');
const chalk = require('chalk');

// Función para configurar y mostrar la lista de proyectos en la pantalla
function createListScreen(screen, proyectos) {
    // Crea una lista blessed
    const list = blessed.list({
        top: '40%',
        left: 'center',
        width: '100%',
        height: '25%',
        items: proyectos.map(proyecto => `${chalk.magenta.bgBlack('Project name: ')}${proyecto.name} ==> # dependencies: (${proyecto.dependencies})  ==> ${proyecto.selected ? chalk.blue.bgGreen.bold('Selected') : chalk.yellow.bgRed.bold('No selected')}
        `),
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

    // Renderiza la pantalla
    screen.render();

    return list;
}

module.exports = { createListScreen };
