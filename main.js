const { app } = require('electron');
const run = require('./src/node/modules/run');

app.on('ready', () => {
    run();
});

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});