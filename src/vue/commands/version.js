const ipc = require('ipc');

export function loadVersions() {
    ipc.send('versions:load');
}

export function installVersion(versionId) {
    ipc.send('version:install', { versionId });
}

export function uninstallVersion(versionId) {
    ipc.send('version:uninstall', { versionId });
}