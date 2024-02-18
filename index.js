const blessed = require('blessed');
const { BuscarProyectosNpm } = require('./src/utils/buscarProyectosNpm');

const { showTitle } = require('./src/screens/titleScreen');
const { showInstructions } = require('./src/screens/instructionsScreen');
const { createInputScreen } = require('./src/screens/inputScreen');
const { createLabelScreen } = require('./src/screens/labelScreen');
const { createListScreen } = require('./src/screens/listScreen');

const { handleList } = require('./src/handlers/listHandler');

const screen = blessed.screen({
    smartCSR: true
});

// Get Projects List
const proyectos = BuscarProyectosNpm(process.cwd());

// Render Title
showTitle(screen);
// Render Instructions
showInstructions(screen);
// Render Label
createLabelScreen(screen)
// Render List
const list = createListScreen(screen, proyectos);
// Render Input
const inputBox = createInputScreen(screen, list, proyectos);

list.focus();

handleList(list, proyectos, screen, inputBox);

//handleInput(inputBox, screen, proyectos);

screen.key(['escape', 'C-c', 'S-q'], () => process.exit(0));

//screen.render();
