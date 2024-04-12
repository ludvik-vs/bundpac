const blessed = require('blessed');
const { handleInput } = require('../handlers/inputHandler');

/**
 * This function creates an input screen that allows the user to type the name of a new project.
 * @param {object} screen - The screen where the input box will be displayed.
 * @param {object} projectsManager - The project manager that manages the projects.
 * @param {object} list - The list of projects.
 * @returns {object} The created input box.
 */
function createInputScreen(screen, projectsManager, list) {

    // Create a textbox for the input.
    const inputBox = blessed.textbox({
        top: '70%',
        left: 'center',
        width: '100%',
        height: 4,
        border: {
            type: 'line'
        },
        style: {
            fg: 'white',
            bg: 'black',
            focus: {
                fg: 'white',
                bg: 'black',
            },
            hover: {
                fg: 'white',
                bg: 'black',
            },
            scrollbar: {
                fg: 'white',
                bg: 'black',
            },
        },
    });

    // Append the input box to the screen.
    screen.append(inputBox);

    // Handle the 'keypress' event.
    inputBox.on('keypress', (ch, key) => {

        // Get the current content of the input box.
        let currentValue = inputBox.getContent();

        // If the 'enter' key is pressed, handle the input.
        if (key.full === 'enter') {
            handleInput(currentValue, projectsManager, screen, list)
        }
        // If the 'backspace' or 'delete' key is pressed, remove the last character from the input.
        else if (key.full === 'backspace' || key.full === 'delete') {
            currentValue = currentValue.slice(0, -1);
            inputBox.setContent(currentValue);
            screen.render();
        }
        // If the 'space' key is pressed, add a space to the input.
        else if (key.full === 'space') {
            currentValue += ' ';
            inputBox.setContent(currentValue);
            screen.render();
        }
        // If any other key is pressed, add the character to the input.
        else {
            currentValue += ch;
            inputBox.setContent(currentValue);
            screen.render();
        }
    });

    // Return the created input box.
    return inputBox;
}

module.exports = { createInputScreen };
