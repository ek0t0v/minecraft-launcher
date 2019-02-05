'use strict';

const storage = require('electron-json-storage-sync');

// todo: Сделать отдельный модуль для пуша в array-поля конфига или делать это в модуле updateConfig.

module.exports = function pushUserToUsers(user) {
    let currentConfig = storage.get('config');

    if (currentConfig.status) {
        if (currentConfig.data.users.includes(user)) {
            throw 'Этот юзер уже записан в users.';
        }

        currentConfig.data.users.unshift(user);

        let result = storage.set('config', currentConfig.data);

        if (!result.status) {
            throw 'Не удалось записать в конфиг.';
        }
    }
};