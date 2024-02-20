const { showAlert } = require('../screens/alertScreen');
const Project = require('./Project');

class ProjectManager {
    constructor() {
        if (!ProjectManager.instance) {
            this.projects = {};
            ProjectManager.instance = this;
        }

        return ProjectManager.instance;
    }

    addProject(project) {
        this.projects[project.name] = project;
    }

    removeProject(projectName) {
        if (this.projects.hasOwnProperty(projectName)) {
            delete this.projects[projectName];
        }
    }

    getProject(projectName) {
        return this.projects[projectName];
    }

    getAllProjects() {
        return Object.values(this.projects);
    }

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

    toggleSelected(projectName) {
        const project = this.projects[projectName];
        if (project) {
            project.isSelected = !project.isSelected;
        }
    }

    getSelectedProjects() {
        return Object.values(this.projects).filter(project => project.isSelected);
    }
}

module.exports = ProjectManager;

