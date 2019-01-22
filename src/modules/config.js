const ipc = require('electron').ipcRenderer;

export function updateConfig(key, value) {
    ipc.send('updateConfig', { key, value });
}