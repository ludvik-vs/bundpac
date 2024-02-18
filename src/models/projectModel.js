class Project {
    constructor(name, dependencies) {
        this.name = name;
        this.dependencies = dependencies;
        this.isSelected = false;
    }
}

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
}

`
    const projectManager = new ProjectManager();
    Object.freeze(projectManager);
    // Ejemplo de uso
    const project1 = new Project("project1", {
        "dependency1": "^1.0.0",
        "dependency2": "^2.0.0"
    });

    const project2 = new Project("project2", {
        "dependency2": "^2.0.0",
        "dependency3": "^3.0.0"
    });

    projectManager.addProject(project1);
    projectManager.addProject(project2);

    console.log(projectManager.getAllProjects());

    const combinedProject = projectManager.combine([project1, project2], "combinedProject");

    console.log(combinedProject);
    console.log(projectManager.getAllProjects());
`
