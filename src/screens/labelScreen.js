const blessed = require('blessed');

// Función para configurar la pantalla de entrada de texto del usuario
function createLabelScreen(screen) {
    // Agrega un label
    const labelBox = blessed.text({
        top: '65%',
        left: 'center',
        width: '100%',
        height: 5,
        content: `Ingrese el nombre del nuevo proyecto y precione enter para crearlo: `,
        border:{
            type: 'none'
        },
        style: {
            fg: 'blue',
            bg: 'black',
        }
    });

    // Agrega tanto el label como el inputBox a la pantalla
    screen.append(labelBox);

    // Renderiza la pantalla
    screen.render();

    return labelBox;
}

module.exports = { createLabelScreen };
