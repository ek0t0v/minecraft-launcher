const ipc = require('ipc');

export function startGame(versionId, userId) {
    ipc.send('game:start', { versionId, userId });
}