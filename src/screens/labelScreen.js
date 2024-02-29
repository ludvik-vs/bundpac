const blessed = require('blessed');

function createLabelScreen(screen) {
    const labelBox = blessed.text({
        top: '65%',
        left: 'center',
        width: '100%',
        height: 5,
        content: `Type the name of the new project and press Enter to create it: `,
        border:{
            type: 'none'
        },
        style: {
            fg: 'blue',
            bg: 'black',
        }
    });

    screen.append(labelBox);

    screen.render();

    return labelBox;
}

module.exports = { createLabelScreen };
