const electron = require('electron');
const ipc = electron.ipcMain;

ipc.on('versions:load', () => {
    electron.webContents.getAllWebContents()[0].send('versions:loaded');
});