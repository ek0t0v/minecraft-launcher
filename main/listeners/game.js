'use strict';

const ipc = require('electron').ipcMain;

ipc.on('launch:start', (e, { versionId, userId }) => {
    require('../modules/game/launch')(versionId, userId);
});