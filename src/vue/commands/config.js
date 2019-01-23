const ipc = require('ipc');

export function updateConfig(key, value) {
    ipc.send('config:update', { key, value });
}