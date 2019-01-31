'use strict';

const fetch = require('node-fetch');
const isVersionInstalled = require('./isVersionInstalled');
const VERSIONS_API_URL = 'https://my-json-server.typicode.com/seniorcote/test-api/versions';

/**
 * @returns {Promise<*>}
 */
module.exports = async function loadVersions() {
    const response = await fetch(VERSIONS_API_URL);
    const versions = await response.json();

    return versions.map(version => {
        version.isInstalled = isVersionInstalled(version);

        return version;
    });
};