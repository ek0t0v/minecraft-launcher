const ipc = require('ipc');

export function loadVersions() {
    ipc.send('versions:load');
}