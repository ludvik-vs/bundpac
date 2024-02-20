const blessed = require('blessed');
const chalk = require('chalk');

// Función para configurar y mostrar el título en la pantalla
function showTitle(screen) {
    // Crea un cuadro para mostrar el título
    const titleBox = blessed.box({
        top: 0,
        left: '50%',
        width: '50%',
        height: '10%',
        content: `${chalk.blue.bold(`B`)}${chalk.cyan.bold(`u`)}${chalk.green.bold(`n`)}${chalk.yellow.bold(`d`)}${chalk.red.bold(`pac`)}`,
        border: {
            type: 'none'
        },
        style: {
            fg: 'white',
            bg: 'black',
            font: { size: '128' }
        }
    });

    // Añade el título a la pantalla
    screen.append(titleBox);

    // Renderiza la pantalla
    //screen.render();
}

module.exports = { showTitle };
