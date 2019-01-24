const electron = require('electron');

module.exports = function sendMessageToRenderer(message, payload) {
    const webContents = electron.webContents.getAllWebContents()[0];

    typeof payload === 'undefined'
        ? webContents.send(message)
        : webContents.send(message, payload)
    ;
};