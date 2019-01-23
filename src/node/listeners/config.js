const electron = require('electron');
const ipc = electron.ipcMain;
const storage = require('electron-json-storage-sync');
const deepmerge = require('deepmerge');
const defaultConfig = require('./config');

ipc.on('config:load', () => {
    console.log('config:load');
    const config = deepmerge(defaultConfig, storage.get('config').data);

    electron.webContents.getAllWebContents()[0].send('config:load:success', config);
    console.log('config:load:success');
});

ipc.on('config:update', (e, payload) => {
    console.log('config:update');
    let currentConfig = storage.get('config').data;

    storage.set('config', Object.assign(currentConfig, { [payload.key]: payload.value }));

    electron.webContents.getAllWebContents()[0].send('config:update:success');
    console.log('config:update:success');
});