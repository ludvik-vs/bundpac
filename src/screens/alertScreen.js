const blessed = require('blessed');

/**
 * This function displays an alert message on the screen.
 * @param {object} screen - The screen where the alert will be displayed.
 * @param {string} message - The alert message to display.
 */
function showAlert(screen, message) {
    // Create a box for the alert.
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

    // Append the alert box to the screen.
    screen.append(alertBox);

    // Render the screen.
    screen.render();
}

module.exports = { showAlert };
