const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const blessed = require('blessed');

function buscarProyectosNpm(directorio, proyectos = []) {
    const archivos = fs.readdirSync(directorio, { withFileTypes: true });

    archivos.forEach((archivo) => {
        const rutaCompleta = path.join(directorio, archivo.name);

        if(archivo.isDirectory()){
            const rutaPackageJson = path.join(rutaCompleta, 'package.json');

            if (fs.existsSync(rutaPackageJson)) {
                const packageJson = JSON.parse(fs.readFileSync(rutaPackageJson, 'utf-8'));

                proyectos.push({
                    'name': packageJson.name,
                    'dependencies': Object.keys(packageJson.dependencies || {}).length,
                    'selected': false,
                });
            }
        }
    })
    return proyectos;
}

const proyectos = buscarProyectosNpm(process.cwd());

// Crea una pantalla blessed
const screen = blessed.screen({
    smartCSR: true
});

const title = blessed.box({
    top: 0,
    left: 'center',
    width: '50%',
    height: '25%',
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

// Crea las instrucciones
const instructions = blessed.box({
    top: '25%',
    left: 'center',
    width: '100%',
    height: '20%',
    content: `
    1. Para salir presiona la tecla ${chalk.red('q')} o ${chalk.red('esc')}.
    2. Para moverse entre el listado de proyectos use las ${chalk.green('↑↓')} felchas direccionales del teclado.
    3. Para seleccionar o deseleccionar un proyecto, presione la barra espaciadora ${chalk.blue('┌─┐')}.
    4. Para procesar y crear un nuevo poyecto unificado presione enter ${chalk.green('┘')}
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

// Crea una lista blessed
const list = blessed.list({
    top: '50%',
    left: 'center',
    width: '100%',
    height: '60%',
    items: proyectos.map(proyecto => `${chalk.magenta.bgBlack('Project name: ')}${proyecto.name} ==> # dependencies: (${proyecto.dependencies})  ==> ${proyecto.selected ? chalk.blue.bgGreen.bold('Selected') : chalk.yellow.bgRed.bold('No selected')}
    `),
    keys: true,
    vi: true,
    style: {
        selected: {
            blink: false,
            inverse: true,
        }
    }
});

// Añade la lista a la pantalla
screen.append(list);
screen.append(title);
screen.append(instructions);

// Haz que la lista sea interactiva
list.focus();

// Añade un controlador de eventos para la tecla de espacio
list.key('space', () => {
    const selectedItemIndex = list.selected;
    proyectos[selectedItemIndex].selected = !proyectos[selectedItemIndex].selected;
    list.setItem(selectedItemIndex, `${chalk.magenta.bgBlack('Project name: ')}${proyectos[selectedItemIndex].name} ==> # dependencies: (${proyectos[selectedItemIndex].dependencies}) ${proyectos[selectedItemIndex].selected ? chalk.blue.bgGreen('Selected') : chalk.yellow.bgRed('No selected')}`);
    screen.render();
});

// Añade un controlador de eventos para salir
screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

// Renderiza la pantalla
screen.render();
