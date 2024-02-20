const blessed = require('blessed');
const { handleInput } = require('../handlers/inputHandler');

function createInputScreen(screen, projectsManager) {

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

    screen.append(inputBox);

    inputBox.on('keypress', (ch, key) => {

        let currentValue = inputBox.getContent();

        if (key.full === 'enter') {
            handleInput(currentValue, projectsManager, screen)
        } else if (key.full === 'backspace' || key.full === 'delete') {
            currentValue = currentValue.slice(0, -1);
            inputBox.setContent(currentValue);
            screen.render();
        } else if (key.full === 'space') {
            currentValue += ' ';
            inputBox.setContent(currentValue);
            screen.render();
        } else {
            currentValue += ch;
            inputBox.setContent(currentValue);
            screen.render();
        }
    });

    return inputBox;
}

module.exports = { createInputScreen };
