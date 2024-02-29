const blessed = require('blessed');
const chalk = require('chalk');

function showInstructions(screen) {
    const instructionsBox = blessed.box({
        top: '20%',
        left: 'center',
        width: '100%',
        height: '20%',
        content: `
        1. keys | ${chalk.red('q')} our ${chalk.red('esc')} | to exit.
        2. Use the ${chalk.green('↑↓')} directional arrows to move through the project list.
        3. Key ${chalk.blue('┌─┐')} to to change the project selection status.
        4. Key Enter ${chalk.green('┘')} to process the selected projects.
        ${chalk.red.bgYellow('Note')}: The new project will be created in the same directory where the selected projects are located.
        `,
        border: {
            type: 'line'
        },
        style: {
            fg: 'white',
            bg: 'black',
        }
    });

    screen.append(instructionsBox);
}

module.exports = { showInstructions };
