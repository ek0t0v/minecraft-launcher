'use strict';

const { app, BrowserWindow } = require('electron');
const storage = require('electron-json-storage-sync');
const defaultConfig = require('../resources/config');
const path = require('path');

function initConfig() {
    if (!storage.get('config').status) {
        defaultConfig.gameDir = app.getPath('home').concat(path.sep).concat('.minecraft');

        const result = storage.set('config', defaultConfig);

        if (!result.status) {
            throw 'Failed to initialize application config.';
        }
    }
}

function initWindow() {
    let window = new BrowserWindow({
        width: defaultConfig.width,
        height: defaultConfig.height,
        frame: false,
        titleBarStyle: 'hidden',
    });

    window.setResizable(false);
    window.on('closed', () => window = null);
    window.loadFile('index.html');

    return window;
}

module.exports = {
    run: function run() {
        initConfig();

        require('./listeners');

        initWindow();

        if (process.env.NODE_ENV === 'development') {
            require('vue-devtools').install();
        }
    },
    setAppDir: function setAppDir(dir) {
        const userDataPathArray = app.getPath('userData').split(path.sep);

        userDataPathArray.splice(-1, 1);

        app.setPath('userData', userDataPathArray.join(path.sep).concat(path.sep).concat('.launcher'));
    },
};
