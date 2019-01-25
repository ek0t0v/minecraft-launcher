const ipc = require('electron').ipcMain;

ipc.on('game:start', (e, { versionId, userId }) => {
    require('../modules/game/runGame')(versionId, userId);
});