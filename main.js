const { app } = require('electron');
const { run, setAppDir } = require('./main/run');

setAppDir('.launcher');

app.on('ready', () => {
    run();
});

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});