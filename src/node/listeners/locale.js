const electron = require('electron');
const ipc = electron.ipcMain;

ipc.on('locale:load', () => {
    console.log('locale:load');
    electron.webContents.getAllWebContents()[0].send('locale:load:success');
    console.log('locale:load:success');
});