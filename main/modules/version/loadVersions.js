'use strict';

const fetch = require('node-fetch');
const isInstalled = require('./isInstalled');
const constants = require('../../constants');

/**
 * @returns {Promise<*>}
 */
module.exports = async function loadVersions() {
    const response = await fetch(constants.versionsApiBaseUrl);
    const versions = await response.json();

    return versions.map(version => {
        version.isInstalled = isInstalled(version);

        return version;
    });
};