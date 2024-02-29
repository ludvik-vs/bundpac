const blessed = require('blessed');

function showAlert(screen, message) {
    const alertBox = blessed.box({
        top: '85%',
        left: 'center',
        width: '50%',
        height: '10%',
        content: message,
        border: {
            type: 'line'
        },
        style: {
            fg: 'black',
            bg: 'yellow',
        }
    });

    screen.append(alertBox);

    screen.render();
}

module.exports = { showAlert };
