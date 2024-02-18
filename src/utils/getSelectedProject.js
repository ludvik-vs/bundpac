function getSelectedProjects(list, projects) {
    const selectedProjects = [];

    // Recorre cada elemento de la lista
    list.items.forEach((item, index) => {
        // Verifica si el elemento está seleccionado
        if (item.isSelected) {
            // Si está seleccionado, agrega el proyecto correspondiente a la lista de proyectos seleccionados
            selectedProjects.push(projects[index]);
        }
    });

    return selectedProjects;
}

module.exports = { getSelectedProjects };