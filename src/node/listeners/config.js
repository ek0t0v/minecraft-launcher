const ipc = require('electron').ipcMain;
const sendMessageToRenderer = require('../modules/sendMessageToRenderer');
const storage = require('electron-json-storage-sync');
const deepmerge = require('deepmerge');
const defaultConfig = require('../../../resources/config');

ipc.on('config:load', () => {
    let currentConfig = storage.get('config');

    if (currentConfig.status) {
        sendMessageToRenderer('config:loaded', {
            config: deepmerge(defaultConfig, currentConfig.data),
        });
    }
});

ipc.on('config:update', (e, payload) => {
    let currentConfig = storage.get('config');

    if (currentConfig.status) {
        let result = storage.set('config', Object.assign(currentConfig.data, { [payload.key]: payload.value }));

        if (result.status) {
            sendMessageToRenderer('config:updated', {
                config: deepmerge(defaultConfig, result.data),
            });
        }
    }
});