const { app, BrowserWindow } = require('electron');
const storage = require('electron-json-storage-sync');
const _ = require('lodash/core');
const defaultConfig = require('./src/node/config');

function initConfig() {
    if (!storage.get('config').status) {
        const result = storage.set('config', defaultConfig);

        if (!result.status) {
            throw 'Failed to initialize application config.';
        }
    }
}

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

function registerListeners() {
    require('./src/node/listeners/config');
}

app.on('ready', () => {
    initConfig();
    registerListeners();
    initWindow();

    if (process.env.NODE_ENV === 'development') {
        require('vue-devtools').install();
    }
});