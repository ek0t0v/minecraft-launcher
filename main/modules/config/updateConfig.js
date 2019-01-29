const storage = require('electron-json-storage-sync');
const deepmerge = require('deepmerge');
const sendMessageToRenderer = require('../util/sendMessageToRenderer');
const defaultConfig = require('../../../resources/config');

module.exports = function updateConfig(key, value) {
    let currentConfig = storage.get('config');

    if (currentConfig.status) {
        let result = storage.set('config', Object.assign(currentConfig.data, { [key]: value }));

        if (result.status) {
            sendMessageToRenderer('config:updated', {
                config: deepmerge(defaultConfig, result.data),
            });
        }
    }
};