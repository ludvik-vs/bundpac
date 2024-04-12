const blessed = require('blessed');

/**
 * This function creates a label screen that prompts the user to type the name of the new project.
 * @param {object} screen - The screen where the label will be displayed.
 * @returns {object} The created label box.
 */
function createLabelScreen(screen) {
    // Create a text box for the label.
    const labelBox = blessed.text({
        top: '65%',
        left: 'center',
        width: '100%',
        height: 5,
        content: `Type the name of the new project and press Enter to create it: `,
        border: {
            type: 'none'
        },
        style: {
            fg: 'blue',
            bg: 'black',
        }
    });

    // Append the label box to the screen.
    screen.append(labelBox);

    // Render the screen.
    screen.render();

    // Return the created label box.
    return labelBox;
}

module.exports = { createLabelScreen };
