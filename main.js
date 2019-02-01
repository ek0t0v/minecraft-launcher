const { app } = require('electron');
const constants = require('./main/constants');
const run = require('./main/run');

run.setAppDir(constants.userDataDir);

app.on('ready', () => {
    run.run();
});

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});