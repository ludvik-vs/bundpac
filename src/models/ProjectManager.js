const Project = require('./Project');

/**
 * This class manages projects.
 */
class ProjectManager {
    /**
     * Constructor for the ProjectManager class.
     * It initializes the projects and ensures that there is only one instance of the class.
     */
    constructor() {
        if (!ProjectManager.instance) {
            this.projects = {};
            ProjectManager.instance = this;
        }

        return ProjectManager.instance;
    }

    /**
     * Adds a project to the manager.
     * @param {object} project - The project to add.
     */
    addProject(project) {
        this.projects[project.name] = project;
    }

    /**
     * Removes a project from the manager.
     * @param {string} projectName - The name of the project to remove.
     */
    removeProject(projectName) {
        if (this.projects.hasOwnProperty(projectName)) {
            delete this.projects[projectName];
        }
    }

    /**
     * Gets a project from the manager.
     * @param {string} projectName - The name of the project to get.
     * @returns {object} The project.
     */
    getProject(projectName) {
        return this.projects[projectName];
    }

    /**
     * Gets all projects from the manager.
     * @returns {array} An array of all projects.
     */
    getAllProjects() {
        return Object.values(this.projects);
    }

    /**
     * Combines multiple projects into a new project.
     * @param {array} projectsToCombine - The projects to combine.
     * @param {string} newName - The name of the new project.
     * @returns {object} The new project.
     */
    combine(projectsToCombine, newName) {
        const combinedDependencies = {};
        projectsToCombine.forEach(project => {
            for (const dependency in project.dependencies) {
                const existingVersion = combinedDependencies[dependency];
                const newVersion = project.dependencies[dependency];
                if (!existingVersion || existingVersion < newVersion) {
                    combinedDependencies[dependency] = newVersion;
                }
            }
        });

        const newProject = new Project(newName, combinedDependencies);
        this.addProject(newProject);
        return newProject;
    }

    /**
     * Toggles the selected status of a project.
     * @param {string} projectName - The name of the project to toggle.
     */
    toggleSelected(projectName) {
        const project = this.projects[projectName];
        if (project) {
            project.isSelected = !project.isSelected;
        }
    }

    /**
     * Gets all selected projects from the manager.
     * @returns {array} An array of all selected projects.
     */
    getSelectedProjects() {
        return Object.values(this.projects).filter(project => project.isSelected);
    }
}

module.exports = ProjectManager;
