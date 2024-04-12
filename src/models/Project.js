/**
 * This class represents a project.
 */
class Project {
    /**
     * Constructor for the Project class.
     * @param {string} name - The name of the project.
     * @param {object} dependencies - The dependencies of the project.
     */
    constructor(name, dependencies) {
        this.name = name;
        this.dependencies = dependencies;
        this.isSelected = false;
    }
}

module.exports = Project;
