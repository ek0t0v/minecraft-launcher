'use strict';

const fs = require('fs');
const path = require('path');
const EventEmitter = require('events').EventEmitter;
const request = require('request');
const getContentLength = require('../modules/util/getContentLength');

module.exports = class UrlDownloader extends EventEmitter {
    download(url, dest) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest);
        }

        getContentLength(url)
            .then(size => {
                const filePath = dest.concat(path.sep).concat(url.substr(url.lastIndexOf('/') + 1));
                const stream = fs.createWriteStream(filePath);

                let downloadedBytes = 0;
                let bytesInPercent = Math.floor(size / 100);
                let progress = 0;

                request
                    .get(url)
                    .on('data', chunk => {
                        downloadedBytes += chunk.length;

                        let currentProgress = Math.floor(downloadedBytes / bytesInPercent);

                        if (currentProgress !== progress) {
                            progress = currentProgress;

                            this.emit('progress', {
                                progress: progress,
                                size: size,
                                downloaded: downloadedBytes,
                            });
                        }
                    })
                    .on('error', e => { throw e })
                    .on('end', () => this.emit('end', filePath))
                    .pipe(stream);
            })
            .catch(e => { throw e });
    }
};
