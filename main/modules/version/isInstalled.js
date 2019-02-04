'use strict';

const fs = require('fs');

module.exports = function isInstalled(data) {
    return false;

    if (data.type === 1) {
        if (!fs.existsSync(constants.path.minecraft)) {
            fs.mkdirSync(constants.path.minecraft);
        }
        // проверить что основная версия установлена
    }

    if ([0, 2].includes(data.type)) {
        // проверить клиент
    }
};