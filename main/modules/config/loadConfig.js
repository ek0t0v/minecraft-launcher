const storage = require('electron-json-storage-sync');
const deepmerge = require('deepmerge');
const sendMessageToRenderer = require('../util/sendMessageToRenderer');
const defaultConfig = require('../../../resources/config');

module.exports = function loadConfig() {
    let currentConfig = storage.get('config');

    if (currentConfig.status) {
        sendMessageToRenderer('config:loaded', {
            config: deepmerge(defaultConfig, currentConfig.data),
        });
    }
};