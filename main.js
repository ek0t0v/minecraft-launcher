const { app } = require('electron');
const run = require('./main/run');

run.setAppDir('.launcher');

app.on('ready', () => {
    run.run();
});

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});