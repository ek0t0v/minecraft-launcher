'use strict';

const os = require('os');
const constants = require('../constants');
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
        let javaDownloadUrl = constants.javaVersions[os.platform()][os.arch()];
        let javaDestDir = constants.path.tmp;
        let downloader = new UrlDownloader();

        downloader.download(javaDownloadUrl, javaDestDir);
        downloader.on('progress', data => {
            let downloaded = (data.downloaded / 1024).toFixed(2);
            let size = (data.size / 1024).toFixed(2);

            sendMessageToRenderer('launch:progress', {
                step: `${trans(progressMessage)} (${downloaded} / ${size})`,
                progress: Math.floor(initialProgress + progressDuration * data.progress / 100),
            });
        });
        downloader.on('end', () => resolve(javaDestDir));
        downloader.on('error', () => reject);
    });
};