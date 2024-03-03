# BUNDPAC

| En | Es |
|----|----|
| Is a tool that quickly and easily automates the consolidation of dependencies from different projects into a single new project. | Es una herramienta que automatiza de forma rápida y sencilla la consolidación de dependencias de diferentes proyectos en un único nuevo proyecto. |


[![made-with-javascript](https://img.shields.io/badge/%20package-npm-cb3837.svg)](https://www.npmjs.com/)
[![Npm package version](https://badgen.net/npm/v/bundpac)](https://npmjs.com/package/bundpac)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-f0db4f.svg)](https://www.javascript.com)
[![Npm package daily downloads](https://badgen.net/npm/dm/bundpac)](https://npmjs.com/package/bundpac)

<a href="https://www.npmjs.com/package/bundpac" title="Go to Bundpac npm">npm Bundpac</a>

[En](#en) | [Es](#es)

# (EN)
## Overview

Bundpac is a tool that quickly and easily automates the consolidation of dependencies from different projects into a single new project:

1. **List All Projects**: Easily view all projects (npm) within a specified directory.

2. **Dynamic Project Selection**: Facilitates the dynamic selection of different projects from the listed ones.

3. **Dependency Consolidation**: Automatically creates a new directory with a provided name and generates a package.json file inside. This package.json file consolidates all the dependencies from the selected projects.

## Installation

You can install bundpac globally using npm:

``
npm install -g bundpac
``

# Usage

1. Install "bundpac" globally.

    ``
    npm install -g bundpac
    ``

2. Open a console (CMD).

3. Go to the directory where the subdirectories of the projects you want to consolidate are located. (The script checks all subdirectories for the "package.json" file of each project and extracts the name of the project and its dependencies). 

4. Type the command ``bundpac`` and press "Enter", the menu will pop up.

5. Select two or more projects you wish to consolidate. (To change the selection status of the projects, hover over the project in the list and press the space key to change the selection status.)

6. Once the desired projects have been selected, press the "Enter" key.

7. A text box will be displayed where you will enter the name of the consolidated project.

8. Once the name is entered, press the "Enter" key to create the project and the project directory with its package.json will be automatically created.

9. In a console (CMD) enter the directory of the created project and execute ```npm install``` to install all the dependencies.

10. To exit you can press 'esc' or the combination of "ctrl + z" or "shift + q".

# Example

### Menu
![Menu](https://raw.githubusercontent.com/joseluis18vs/bundpac/main/img/bp_menu.png)

### Select Projects
![Select](https://raw.githubusercontent.com/joseluis18vs/bundpac/main/img/bp_select.png)

### New project name
![Select](https://raw.githubusercontent.com/joseluis18vs/bundpac/main/img/bp_type.png)

### New project created
![Select](https://raw.githubusercontent.com/joseluis18vs/bundpac/main/img/bp_created.png)

# Contributing
Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

[Github Repo](https://github.com/joseluis18vs/bundpac)

# License
This project is licensed under the MIT License.



# (ES) 
## Visión general
Bundpac es una herramienta que automatiza de forma rápida y sencilla la consolidación de dependencias de diferentes proyectos en un único nuevo proyecto.

1. **Lista de todos los proyectos**: Ver fácilmente todos los proyectos (npm) dentro de un directorio especificado.

2. **Selección dinámica de proyectos**: Facilita la selección dinámica de diferentes proyectos de los listados.

3. **Consolidación de dependencias**: Crea automáticamente un nuevo directorio con un nombre proporcionado y genera un archivo package.json en su interior. Este fichero package.json consolida todas las dependencias de los proyectos seleccionados.

## Instalación

Instala bundpac de forma global con npm:

``
npm install -g bundpac
``

# Uso
1. Instala "bundpac" de forma global.

    ``
    npm install -g bundpac
    ``

2. Abre una consola (CMD).

3. Dirígete al directorio donde se encuentran los subdirectorios de los proyectos que quieres consolidar. (El script revisa todos los subdirectorios en búsqueda del archivo "package.json" de cada proyecto y extrae el nombre del proyecto y sus dependencias) 

4. Escribe el comando ```bundpac``` y presiona "Enter", se desplegara el menu.

5. Selecciona dos o mas proyectos que desees consolidar. (Para cambiar el estatus de selección de los proyectos, debes colocarte sobre el proyecto en el listado y presionar la tecla de espacio para cambiar el estatus de selección)

6. Ya seleccionados los proyectos deseados presiona la tecla "Enter."

7. Se desplegara una caja de texto donde se ingresara el nombre del proyecto consolidado.

8. Ingresado el nombre presiona la tecla "Enter" para crear el proyecto y el se creara automáticamente el directorio del proyecto con su package.json.

9. En una consola (CMD) ingresa el directorio del proyecto creado y ejecuta `npm install` para instalar todas las dependencias.

10. Para salir puede pulsa 'esc' o la combinación de "ctrl + z" o "shift + q"

# Ejemplo

### MENU
![Menu](https://raw.githubusercontent.com/joseluis18vs/bundpac/main/img/bp_menu.png)

### Selección
![Select](https://raw.githubusercontent.com/joseluis18vs/bundpac/main/img/bp_select.png)

### Nuevo Proyecto
![Select](https://raw.githubusercontent.com/joseluis18vs/bundpac/main/img/bp_type.png)

### Proyecto Creado
![Select](https://raw.githubusercontent.com/joseluis18vs/bundpac/main/img/bp_created.png)

# Contribuir
Las contribuciones son bienvenidas. No dude en enviar problemas, solicitudes de funciones o pull requests.
[Repositorio Github](https://github.com/joseluis18vs/bundpac)

# Licencia
Este proyecto está licenciado bajo la Licencia MIT.