const fs = require('fs');
const path = require('path');

// Función para crear un nuevo proyecto npm
function createProject(projectInfo) {
    const projectName = projectInfo.name.trim();
    const projectPath = path.join(process.cwd(), projectName);

    // Crea el directorio si no existe
    if (!fs.existsSync(projectPath)) {
        fs.mkdirSync(projectPath);
    }

    // Crea el objeto del package.json
    const packageJson = {
        name: projectName,
        version: "1.0.0",
        description: "",
        main: "index.js",
        scripts: {
            test: "echo \"Error: no test specified\" && exit 1"
        },
        dependencies: projectInfo.dependencies
    };

    // Escribe el archivo package.json
    fs.writeFileSync(path.join(projectPath, 'package.json'), JSON.stringify(packageJson, null, 2));

    console.log(`Proyecto ${projectName} creado con éxito.`);
}

module.exports = { createProject };
