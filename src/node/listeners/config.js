const electron = require('electron');
const ipc = electron.ipcMain;
const storage = require('electron-json-storage-sync');
const deepmerge = require('deepmerge');
const defaultConfig = require('./config');

ipc.on('config:load', () => {
    let currentConfig = storage.get('config');

    if (currentConfig.status) {
        electron.webContents.getAllWebContents()[0].send('config:loaded', {
            config: deepmerge(defaultConfig, currentConfig.data),
        });
    }
});

ipc.on('config:update', (e, payload) => {
    let currentConfig = storage.get('config');

    if (currentConfig.status) {
        let result = storage.set('config', Object.assign(currentConfig.data, { [payload.key]: payload.value }));

        if (result.status) {
            electron.webContents.getAllWebContents()[0].send('config:updated', {
                config: deepmerge(defaultConfig, result.data),
            });
        }
    }
});