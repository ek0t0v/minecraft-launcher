'use strict';

const ipc = require('electron').ipcMain;
const sendMessageToRenderer = require('../modules/util/sendMessageToRenderer');

ipc.on('user:create', (e, payload) => {
    require('../modules/config/pushUserToUsers')(payload);

    sendMessageToRenderer('user:created');
});

ipc.on('user:remove', (e, payload) => {
    console.log(payload);
});