const electron = require('electron');
const ipc = electron.ipcMain;
const storage = require('electron-json-storage-sync');

ipc.on('config:update', (e, payload) => {
    let currentConfig = storage.get('config').data;

    storage.set('config', Object.assign(currentConfig, { [payload.key]: payload.value }));

    electron.webContents.getAllWebContents()[0].send('config:updated');
});