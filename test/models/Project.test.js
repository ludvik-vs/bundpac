const Project = require('../src/models/Project');

function testProject() {
    const project = new Project("test", { "dependency1": "^1.0.0" });
    if (project.name !== "test") {
        console.error('Test failed: Project name did not match');
    }
    if (JSON.stringify(project.dependencies) !== JSON.stringify({ "dependency1": "^1.0.0" })) {
        console.error('Test failed: Project dependencies did not match');
    }
    if (project.isSelected !== false) {
        console.error('Test failed: Project isSelected did not match');
    }
}

testProject();
