const electron = require('electron');
const ipc = electron.ipcMain;
const storage = require('electron-json-storage-sync');
const deepmerge = require('deepmerge');
const defaultConfig = require('./config');

ipc.on('loadConfig', () => {
    const config = deepmerge(defaultConfig, storage.get('config').data);

    electron.webContents.getAllWebContents()[0].send('loadConfig', config);
});

ipc.on('updateConfig', (e, payload) => {
    let currentConfig = storage.get('config').data;

    storage.set('config', Object.assign(currentConfig, { [payload.key]: payload.value }));
});