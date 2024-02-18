const blessed = require('blessed');
const chalk = require('chalk');

// Función para mostrar una alerta en la pantalla
function showAlert(screen, message) {
    // Crea una caja para mostrar la alerta
    const alertBox = blessed.box({
        top: '85%', // Ajusta la posición para que aparezca por debajo del createInputScreen
        left: 'center',
        width: '50%',
        height: 3,
        content: message, // Utiliza el mensaje proporcionado como contenido
        border: {
            type: 'line'
        },
        style: {
            fg: 'white',
            bg: 'black',
            font:{
                size: 1
            }
        }
    });

    // Añade la caja de alerta a la pantalla
    screen.append(alertBox);

    // Renderiza la pantalla
    screen.render();
}

module.exports = { showAlert };
