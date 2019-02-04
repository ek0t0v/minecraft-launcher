'use strict';

const storage = require('electron-json-storage-sync');

module.exports = function isInstalled(versionId) {
    // пока тут только проверка поля installedVersions из конфига
    let currentConfig = storage.get('config');

    if (currentConfig.status) {
        return currentConfig.data.installedVersions.some(version => version.id === versionId);
    }

    return false;

    // if (data.type === 1) { // проверить что основная версия установлена
    //     if (!fs.existsSync(...)) {}
    // }
    //
    // if ([0, 2].includes(data.type)) { // проверить клиент
    //
    // }
};