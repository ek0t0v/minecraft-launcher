'use strict';

const { app, BrowserWindow, ipcMain } = require('electron');
const storage = require('electron-json-storage-sync');
const defaultConfig = require('../resources/config');
const path = require('path');

let window = null;

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
    window = new BrowserWindow({
        width: defaultConfig.width,
        height: defaultConfig.height,
        // frame: false,
        titleBarStyle: 'hidden',
        icon: './resources/icons/launcher.png',
    });

    window.setResizable(false);
    window.on('closed', () => window = null);
    window.loadFile('index.html');

    // todo: Стоит придумать что-то другое (хотя сейчас у приложения всего одно окно, других не предвидится, поэтому норм).
    global.window = window;
}

module.exports.run = function run() {
    initConfig();

    require('./listeners');

    initWindow();
    require('vue-devtools').install();
    if (process.env.NODE_ENV === 'development') {
        require('vue-devtools').install();
    }
};

module.exports.setAppDir = function setAppDir(dir) {
    const userDataPathArray = app.getPath('userData').split(path.sep);

    userDataPathArray.splice(-1, 1);

    app.setPath('userData', userDataPathArray.join(path.sep).concat(path.sep).concat(dir));
};


