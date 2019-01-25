const ipc = require('electron').ipcMain;
const sendMessageToRenderer = require('../modules/util/sendMessageToRenderer');
const fetch = require('node-fetch');
const isVersionInstalled = require('../modules/version/isVersionInstalled');
const VERSIONS_API_URL = 'https://my-json-server.typicode.com/seniorcote/test-api/versions';

ipc.on('versions:load', () => {
    fetch(VERSIONS_API_URL)
        .then(response => response.json())
        .then(versions => {
            // todo: Предусмотреть вариант, когда у юзера версия установлена, но теперь удалена с сервера.

            versions.map(version => {
                version.isInstalled = isVersionInstalled(version);
            });

            sendMessageToRenderer('versions:loaded', {
                items: versions,
            });
        })
        .catch(e => {
            throw e;
        });
});

ipc.on('version:install', () => {
    // todo: Need to implement.

    sendMessageToRenderer('version:installed');
});

ipc.on('version:uninstall', () => {
    // todo: Need to implement.

    sendMessageToRenderer('version:uninstalled');
});