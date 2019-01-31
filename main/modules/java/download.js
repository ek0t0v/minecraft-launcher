'use strict';

const os = require('os');
const constants = require('../../constants');
const UrlDownloader = require('../../classes/UrlDownloader');
const sendMessageToRenderer = require('../util/sendMessageToRenderer');
const trans = require('../util/trans');

/**
 * @param progressDuration
 * @param progressMessage
 * @param initialProgress
 *
 * @returns {Promise<*>}
 */
module.exports = function download(progressDuration, progressMessage, initialProgress) {
    return new Promise((resolve, reject) => {
        let downloader = new UrlDownloader();

        downloader.download(constants.javaVersions[os.platform()][os.arch()].url, constants.path.tmp);
        downloader.on('progress', data => {
            let downloaded = (data.downloaded / 1024).toFixed(2);
            let size = (data.size / 1024).toFixed(2);

            sendMessageToRenderer('launch:progress', {
                step: `${trans(progressMessage)} (${downloaded} / ${size})`,
                progress: Math.floor(initialProgress + progressDuration * data.progress / 100),
            });
        });
        downloader.on('end', path => resolve(path));
        downloader.on('error', () => reject);
    });
};