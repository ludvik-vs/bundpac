const chalk = require('chalk');
const { crearNuevoProyecto } = require('../utils/crearNuevoProyecto');
const { copiarDependencias } = require('../utils/copiarDependencias');
const { showAlert } = require('../screens/alertScreen');

function handleList(list, proyectos, screen, inputBox, labelBox) {

    list.key('space', () => {
        const selectedItemIndex = list.selected;
        proyectos[selectedItemIndex].selected = !proyectos[selectedItemIndex].selected;
        list.setItem(selectedItemIndex, `${chalk.magenta.bgBlack('Project name: ')}${proyectos[selectedItemIndex].name} ==> # dependencies: (${proyectos[selectedItemIndex].dependencies}) ${proyectos[selectedItemIndex].selected ? chalk.blue.bgGreen('Selected to join') : chalk.yellow.bgRed('No selected')}`);
        screen.render();
    });

    list.key('enter', () => {
        // Contar el número de proyectos seleccionados
        const selectedProjectsCount = proyectos.filter(proyecto => proyecto.selected).length;

        // Verificar si hay al menos dos proyectos seleccionados
        if (selectedProjectsCount >= 2) {
            inputBox.focus();
            inputBox.setFront();
            list.select()
        } else {
            showAlert(screen, 'Debe seleccionar al menos dos proyectos.');
            list.focus();
            list.setFront();
        }
        screen.render();
    });
}

module.exports = { handleList };

