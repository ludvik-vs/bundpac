// ProjectManager.test.js
const Project = require('../src/models/Project');
const projectManager = require('../src/models/ProjectManager');

function testProjectManager() {
    const project1 = new Project("project1", { "dependency1": "^1.0.0" });
    const project2 = new Project("project2", { "dependency2": "^2.0.0" });

    projectManager.addProject(project1);
    projectManager.addProject(project2);

    // Test addProject and getProject
    if (projectManager.getProject("project1") !== project1) {
        console.error('Test failed: Project1 not found');
    }
    if (projectManager.getProject("project2") !== project2) {
        console.error('Test failed: Project2 not found');
    }

    // Test getAllProjects
    if (projectManager.getAllProjects().length !== 2) {
        console.error('Test failed: Not all projects were returned');
    }

    // Test removeProject
    projectManager.removeProject("project1");
    if (projectManager.getProject("project1")) {
        console.error('Test failed: Project1 was not removed');
    }

    // Test combine
    const combinedProject = projectManager.combine([project2], "combinedProject");
    if (!combinedProject || combinedProject.name !== "combinedProject") {
        console.error('Test failed: Combined project was not created correctly');
    }
}

testProjectManager();
