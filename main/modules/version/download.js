'use strict';

const os = require('os');
const constants = require('../../constants');
const UrlDownloader = require('../../classes/UrlDownloader');
const sendMessageToRenderer = require('../util/sendMessageToRenderer');
const trans = require('../util/trans');

function getPlatformName() {
    let platform = os.platform();

    switch (platform) {
        case 'linux':
            break;
        case 'win32':
            platform = 'windows';

            break;
        case 'darwin':
            platform = 'osx';

            break;
    }

    return platform;
}

module.exports = function download(version, progressDuration, progressMessage, initialProgress) {
    return new Promise((resolve, reject) => {
        let downloader = new UrlDownloader();

        downloader.download(`http://5-187-10790-3.b.cdn12.com/versions/${version}/${version}-${getPlatformName()}.tar.gz`, constants.path.tmp);
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