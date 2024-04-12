#!/usr/bin/env node
const blessed = require('blessed');

const { FindNpmProjects } = require('./src/utils/findNpmProjects');
const { showTitle } = require('./src/screens/titleScreen');
const { showInstructions } = require('./src/screens/instructionsScreen');
const { CreateListScreen } = require('./src/screens/listScreen');
const { handleList } = require('./src/handlers/listHandler');
const ProjectManager = require("./src/models/ProjectManager");

// -------- Operations Manager  -------- //
const projectManager = new ProjectManager();

// -------- Get Projects List  -------- //
FindNpmProjects(process.cwd(), projectManager);

// -------- Screens Manager  -------- //
const screen = blessed.screen({
    smartCSR: true
});

// -------- Render Title  -------- //
showTitle(screen);

// -------- Render Instructions  -------- // 
showInstructions(screen);

// -------- Render List  -------- //
const list = CreateListScreen(screen, projectManager);
list.focus()

// -------- Events Manager  -------- //
handleList(list, projectManager, screen);

// -------- Controls Manager  -------- //
screen.key(['escape', 'S-q', 'C-z'], () => process.exit(0));

// -------- Render UI  -------- //
screen.render();
