const blessed = require('blessed');
const chalk = require('chalk');

// Función para configurar y mostrar el título en la pantalla
function showTitle(screen) {
    // Crea un cuadro para mostrar el título
    const titleBox = blessed.box({
        top: 0,
        left: 'center',
        width: '50%',
        height: '20%',
        content: `
    ${chalk.blue.bold(`    //   ) )`)}                              //  //   ) )               
    ${chalk.blue.bold(`   //___/ / `)}                __       ___ //  //___/ /   ___       ___
    ${chalk.blue.bold(`  / __  (   `)}  //   / /  //   ) )  //   ) /  / ____ /  //   ) )  //   
    ${chalk.blue.bold(` //    ) )  `)} //   / /  //   / /  //   / /  //        //   / /  //    
    ${chalk.blue.bold(`//____/ /   `)}((___( (  //   / /  ((___/ /  //        ((___( (  ((____ 


        `,
        border: {
            type: 'none'
        },
        style: {
            fg: 'white',
            bg: 'black',
        }
    });

    // Añade el título a la pantalla
    screen.append(titleBox);

    // Renderiza la pantalla
    //screen.render();
}

module.exports = { showTitle };
