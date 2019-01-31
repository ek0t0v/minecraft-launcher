'use strict';

const os = require('os');
const fs = require('fs');
const rimraf = require('rimraf');
const constants = require('../../constants');
const { hashElement } = require('folder-hash');

/**
 * @returns {Promise<any>}
 */
module.exports = function isInstalled() {
    return new Promise(resolve => {
        if (!fs.existsSync(constants.path.java)) {
            resolve(false);
        }

        hashElement(constants.path.java)
            .then(result => {
                if (result.hash !== constants.javaVersions[os.platform()][os.arch()].sha1) {
                    rimraf.sync(constants.path.java);

                    resolve(false);
                }

                resolve(true);
            })
            .catch(e => { throw e });
    });
};