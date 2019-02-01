'use strict';

/**
 * @param version
 *
 * @returns {Promise<*>}
 */
module.exports = async function checkVersion(version) {

    // как проверять что все файлы на месте?
    // допустим ассеты можно модифицировать, а клиент (jar) нельзя

    return new Promise((resolve, reject) => {
        resolve(version);
    });
};