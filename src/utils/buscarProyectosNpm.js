const fs = require('fs');
const path = require('path');

function BuscarProyectosNpm(directorio) {
    const proyectos = [];

    const archivos = fs.readdirSync(directorio, { withFileTypes: true });

    archivos.forEach((archivo) => {
        const rutaCompleta = path.join(directorio, archivo.name);

        if (archivo.isDirectory()) {
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
    });

    return proyectos;
}

module.exports = { BuscarProyectosNpm };
