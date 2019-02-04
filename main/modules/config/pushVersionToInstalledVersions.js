'use strict';

const storage = require('electron-json-storage-sync');

// todo: Сделать отдельный модуль для пуша в array-поля конфига или делать это в модуле updateConfig.

module.exports = function pushVersionToInstalledVersions(version) {
    if (version.hasOwnProperty('isInstalled')) {
        delete version.isInstalled;
    }

    let currentConfig = storage.get('config');

    if (currentConfig.status) {
        if (currentConfig.data.installedVersions.includes(version)) {
            throw 'Эта версия уже записана в installedVersions.';
        }

        currentConfig.data.installedVersions.push(version);

        let result = storage.set('config', currentConfig.data);

        if (!result.status) {
            throw 'Не удалось записать в конфиг.';
        }
    }
};