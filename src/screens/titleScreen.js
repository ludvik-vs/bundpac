const blessed = require('blessed');
const chalk = require('chalk');

/**
 * This function displays a title on the screen.
 * @param {object} screen - The screen where the title will be displayed.
 */
function showTitle(screen) {

    // The text of the title.
    const titleText = 'BUNDPAC';
    // The width of the title, including a space on each side.
    const titleWidth = titleText.length + 2;
    // The width of the screen.
    const screenWidth = screen.width;
    // The left offset of the title to center it on the screen.
    const leftOffset = Math.floor((screenWidth - titleWidth) / 2);

    // Create a box for the title.
    const titleBox = blessed.box({
        top: 0,
        left: leftOffset,
        width: titleWidth,
        height: '8%',
        content: chalk.blue.bold(titleText),
        border: {
            type: 'bg',
            bg: 'transparent'
        },
        style: {
            fg: 'white',
            bg: 'yellow',
            font: { size: '228' }
        }
    });

    // Append the title box to the screen.
    screen.append(titleBox);
}

module.exports = { showTitle };
