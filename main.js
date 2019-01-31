const { app } = require('electron');
const run = require('./main/run');

// todo: На windows похоже не грузятся шрифты, поправить.

app.on('ready', () => {
    run();
});

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});