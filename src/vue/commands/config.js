const ipc = require('ipc');

export function loadConfig() {
    ipc.send('config:load');
}

export function updateConfig(key, value) {
    ipc.send('config:update', { key, value });
}