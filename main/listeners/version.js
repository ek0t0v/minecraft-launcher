'use strict';

const ipc = require('electron').ipcMain;
const sendMessageToRenderer = require('../modules/util/sendMessageToRenderer');

ipc.on('versions:load', async () => {
    sendMessageToRenderer('versions:loaded', {
        items: await require('../modules/version/loadVersions')(),
    });
});

ipc.on('version:install', () => {
    // todo: Need to implement.

    sendMessageToRenderer('version:installed');
});

ipc.on('version:uninstall', () => {
    // todo: Need to implement.

    sendMessageToRenderer('version:uninstalled');
});