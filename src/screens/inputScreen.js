const blessed = require('blessed');
const { showAlert } = require('./alertScreen');
const { handleInput } = require('../handlers/inputHandler');
const { getSelectedProjects } = require('../utils/getSelectedProject');

// Función para configurar la pantalla de entrada de texto del usuario
function createInputScreen(screen, list, projects) {

    // Agrega un cuadro de texto de entrada para que el usuario ingrese el nombre del nuevo proyecto
    const inputBox = blessed.box({
        top: '70%',
        left: 'center',
        width: '100%',
        height: 4,
        border: {
            type: 'line'
        },
        style: {
            fg: 'white', // Color del texto
            bg: 'black', // Color del fondo
            focus: {
                fg: 'white', // Color del texto cuando el inputBox está en foco
                bg: 'black', // Color del fondo cuando el inputBox está en foco
            },
            hover: {
                fg: 'white', // Color del texto cuando el mouse está encima
                bg: 'black', // Color del fondo cuando el mouse está encima
            },
            scrollbar: {
                fg: 'white', // Color de la barra de desplazamiento
                bg: 'black', // Color del fondo de la barra de desplazamiento
            },
        },
    });

    // Agrega tanto el label como el inputBox a la pantalla
    screen.append(inputBox);

    // Maneja el evento 'keypress' para el inputBox
    inputBox.on('keypress', (ch, key) => {
        // Obtiene el valor actual del inputBox
        let currentValue = inputBox.getContent();

        // Verifica si se presionó la tecla "enter"
        if (key.full === 'enter') {
            // Obtiene el valor ingresado por el usuario y elimina espacios en blanco alrededor
            const inputValue = currentValue.trim();

            const selectedProjects = getSelectedProjects(list, projects)
            
            // Verifica si el valor ingresado no está vacío
            if (inputValue !== '') {
                // Ejecuta la función handleEnter con el valor ingresado como argumento
                // showAlert(screen, inputValue);
                if (selectedProjects.length >= 2) {

                    handleInput(inputValue, inputBox, screen, selectedProjects)
                }
                // Limpia el contenido del inputBox
                inputBox.setContent('');
            } else {
                // Muestra un mensaje de error si no se ingresó nada
                showAlert(screen, 'Por favor, ingrese un nombre de proyecto válido.');
            }
            // Renderiza la pantalla para actualizar los cambios
            screen.render();
        } else if (key.full === 'backspace' || key.full === 'delete') {
            // Si se presionó la tecla "backspace" o "delete", borra el último caracter del valor actual
            currentValue = currentValue.slice(0, -1);
            inputBox.setContent(currentValue);
            // Renderiza la pantalla para actualizar los cambios
            screen.render();
        } else {
            // Si no se presionó "enter" ni "backspace" ni "delete", agrega el caracter al valor actual
            inputBox.setContent(currentValue + ch);
            // Renderiza la pantalla para actualizar los cambios
            screen.render();
        }
    });
    
    // Renderiza la pantalla
    screen.render();

    return inputBox;
}

module.exports = { createInputScreen };
