const { execSync } = require('child_process');

// Función para crear un nuevo proyecto npm
function crearNuevoProyecto(nombre, directorio) {
    const comando = `npm init -y`;
    execSync(comando, { cwd: directorio, stdio: 'inherit' });
    console.log(`Proyecto ${nombre} creado con éxito.`);
}

module.exports = { crearNuevoProyecto };
