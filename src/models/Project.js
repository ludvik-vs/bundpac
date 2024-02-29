class Project {
    constructor(name, dependencies) {
        this.name = name;
        this.dependencies = dependencies;
        this.isSelected = false;
    }
}

module.exports = Project;
