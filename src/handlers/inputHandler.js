const { crearNuevoProyecto } = require('../utils/crearNuevoProyecto');
const { copiarDependencias } = require('../utils/copiarDependencias');
const { showAlert } = require('../screens/alertScreen');

function handleInput(nombreNuevoProyecto, inputBox, screen, proyectos) {
    // Verifica si el nombre del nuevo proyecto no está vacío y es una cadena de texto
    if (typeof nombreNuevoProyecto === 'string' && nombreNuevoProyecto.trim() !== '') {
        const selectedProjects = proyectos.filter(proyecto => proyecto.selected);
        // Verifica si se han seleccionado al menos dos proyectos
        if (selectedProjects.length >= 2) {
            // Crea el nuevo proyecto
            crearNuevoProyecto(nombreNuevoProyecto, process.cwd());
            // Copia las dependencias de los proyectos seleccionados al nuevo proyecto
            copiarDependencias(selectedProjects, nombreNuevoProyecto);
            // Limpia el contenido del inputBox
            inputBox.setContent('');
            // Renderiza la pantalla para actualizar los cambios
            screen.render();
        } else {
            // Muestra un mensaje de error si no se seleccionaron suficientes proyectos
            showAlert(screen, 'Por favor, seleccione al menos dos proyectos.');
        }
    } else {
        // Muestra un mensaje de error si no se ingresó nada como nombre para el proyecto o no es una cadena
        showAlert(screen, 'Por favor, ingrese un nombre de proyecto válido.');
    }
}

module.exports = { handleInput };
