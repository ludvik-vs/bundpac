const fs = require('fs');
const path = require('path');

// Función para copiar las dependencias de los proyectos seleccionados en un nuevo proyecto
function copiarDependencias(proyectos, nombreNuevoProyecto) {
    const directorioNuevoProyecto = path.join(process.cwd(), nombreNuevoProyecto);
    const packageJsonNuevoProyecto = require(path.join(directorioNuevoProyecto, 'package.json'));

    proyectos.forEach(proyecto => {
        if (proyecto.selected) {
            const directorioProyecto = path.join(process.cwd(), proyecto.name);
            const packageJsonProyecto = require(path.join(directorioProyecto, 'package.json'));

            for (let dep in packageJsonProyecto.dependencies) {
                if (!(dep in packageJsonNuevoProyecto.dependencies) || packageJsonNuevoProyecto.dependencies[dep] < packageJsonProyecto.dependencies[dep]) {
                    packageJsonNuevoProyecto.dependencies[dep] = packageJsonProyecto.dependencies[dep];
                }
            }
        }
    });

    fs.writeFileSync(path.join(directorioNuevoProyecto, 'package.json'), JSON.stringify(packageJsonNuevoProyecto, null, 2));
}

module.exports = { copiarDependencias };
