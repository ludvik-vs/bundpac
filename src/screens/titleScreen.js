const blessed = require('blessed');
const chalk = require('chalk');

function showTitle(screen) {

    const titleText = 'BUNDPAC';
    const titleWidth = titleText.length + 2;
    const screenWidth = screen.width;
    const leftOffset = Math.floor((screenWidth - titleWidth) / 2);

    const titleBox = blessed.box({
        top: 0,
        left: leftOffset,
        width: titleWidth,
        height: '8%',
        content: chalk.blue.bold(titleText),
        border: {
            type: 'bg',
            bg:'transparent'
        },
        style: {
            fg: 'white',
            bg: 'yellow',
            font: { size: '228' }
        }
    });

    screen.append(titleBox);

}

module.exports = { showTitle };
