const electron = require('electron');
const ipc = electron.ipcMain;
const storage = require('electron-json-storage-sync');
const deepmerge = require('deepmerge');
const defaultConfig = require('./config');

function sendMessage(message, payload) {
    electron.webContents.getAllWebContents()[0].send(message, payload);
}

async function checkSystem() {
    sendMessage('bootstrap:step', { name: 'Check system...' });
}

async function loadConfig() {
    sendMessage('bootstrap:step', { name: 'Load config...' });
    sendMessage('config:loaded', deepmerge(defaultConfig, storage.get('config').data));
}

async function checkJava() {
    sendMessage('bootstrap:step', { name: 'Check java...' });
}

async function loadVersions() {
    sendMessage('bootstrap:step', { name: 'Load versions...' });
}

async function bootstrap() {
    await checkSystem();
    await loadConfig();
    await checkJava();
    await loadVersions();

    sendMessage('bootstrap:finished');
}

ipc.on('bootstrap:start', bootstrap);