const blessed = require('blessed');

// Función para mostrar una alerta en la pantalla
function showAlert(screen, message) {
    // Crea una caja para mostrar la alerta
    const alertBox = blessed.box({
        top: '85%', // Ajusta la posición para que aparezca por debajo del createInputScreen
        left: 'center',
        width: '50%',
        height: '10%',
        content: message, // Utiliza el mensaje proporcionado como contenido
        border: {
            type: 'line'
        },
        style: {
            fg: 'black',
            bg: 'yellow',
        }
    });

    // Añade la caja de alerta a la pantalla
    screen.append(alertBox);

    // Renderiza la pantalla
    screen.render();
}

module.exports = { showAlert };