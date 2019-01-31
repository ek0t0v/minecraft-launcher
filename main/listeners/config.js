'use strict';

const ipc = require('electron').ipcMain;

ipc.on('config:load', () => {
    require('../modules/config/loadConfig')();
});

ipc.on('config:update', (e, { key, value }) => {
    require('../modules/config/updateConfig')(key, value);
});