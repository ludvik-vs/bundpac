const blessed = require('blessed');
const chalk = require('chalk');

// Función para configurar y mostrar las instrucciones en la pantalla
function showInstructions(screen) {
    // Crea una caja para mostrar las instrucciones
    const instructionsBox = blessed.box({
        top: '20%',
        left: 'center',
        width: '100%',
        height: '20%',
        content: `
        1. Para salir presiona la tecla ${chalk.red('q')} o ${chalk.red('esc')}.
        2. Para moverse entre el listado de proyectos use las ${chalk.green('↑↓')} felchas direccionales del teclado.
        3. Para seleccionar o deseleccionar un proyecto, presione la barra espaciadora ${chalk.blue('┌─┐')}.
        4. Para procesar y crear un nuevo proyecto unificado presione enter ${chalk.green('┘')}
        5.
        `,
        border: {
            type: 'line'
        },
        style: {
            fg: 'white',
            bg: 'black',
        }
    });

    // Añade la caja de instrucciones a la pantalla
    screen.append(instructionsBox);

    // Renderiza la pantalla
    //screen.render();
}

module.exports = { showInstructions };
