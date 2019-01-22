const { app, BrowserWindow } = require('electron');
const storage = require('electron-json-storage-sync');
const deepmerge = require('deepmerge');
const _ = require('lodash/core');
const defaultConfig = require('./config');

// const ipc = require('electron').ipcRenderer;

// const storage = require('electron-json-storage');
// const _ = require('lodash');
// const remote = require('electron').remote;
// const fs = remote.require('fs');

// const defaultConfig = {
//     theme: 'classic',
//     sidebarPosition: 'right',
//     locale: 'en',
// };

function initWindow() {
    let window = new BrowserWindow({
        width: 800,
        height: 600,
    });

    window.on('closed', function() {
        window = null;
    });

    window.loadFile('index.html');

    return window;
}

function registerMessageHandlers() {
    require('./src/handlers/config');
}

app.on('ready', () => {
    if (!storage.get('config').status) {
        const result = storage.set('config', defaultConfig);

        if (!result.status) {
            throw 'Failed to initialize application config.';
        }
    }

    registerMessageHandlers();

    const window = initWindow();
    window.webContents.send('test' , {msg:'hello from main process'});
});