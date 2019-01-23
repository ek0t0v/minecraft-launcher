const { BrowserWindow } = require('electron');
const storage = require('electron-json-storage-sync');
const defaultConfig = require('../config');

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
        width: defaultConfig.width,
        height: defaultConfig.height,
    });

    window.on('closed', function() {
        window = null;
    });

    window.loadFile('index.html');

    return window;
}

module.exports = function run() {
    initConfig();

    require('../listeners');

    initWindow();

    require('vue-devtools').install();

    // if (process.env.NODE_ENV === 'development') {
    //     require('vue-devtools').install();
    // }
};
