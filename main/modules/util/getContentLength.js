'use strict';

const request = require('request');

/**
 * @param url
 *
 * @returns {Promise<any>}
 */
module.exports = function getContentLength(url) {
    return new Promise((resolve, reject) => {
        request.head(url)
            .on('response', response => resolve(response.headers['content-length']))
            .on('error', () => reject('Failed to get content-length header.'));
    });
};