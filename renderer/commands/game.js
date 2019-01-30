const ipc = require('ipc');

export function launch(versionId, userId) {
    ipc.send('launch:start', { versionId, userId });
}