'use strict';

const fs = require('fs');
const path = require('path');
const EventEmitter = require('events').EventEmitter;
const request = require('request');
const getContentLength = require('../util/getContentLength');

module.exports = class UrlDownloader extends EventEmitter {
    download(url, dest) {
        getContentLength(url)
            .then(size => {
                const stream = fs.createWriteStream(dest.concat(path.sep).concat('file.tar.gz'));

                let downloadedBytes = 0;
                let bytesInPercent = Math.floor(size / 100);
                let progress = 0;

                request
                    .get({
                        url: url,
                        rejectUnauthorized: false,
                        agent: false,
                        headers: {
                            connection: 'keep-alive',
                        },
                    })
                    .on('data', chunk => {
                        downloadedBytes += chunk.length;

                        let currentProgress = Math.floor(downloadedBytes / bytesInPercent);

                        if (currentProgress !== progress) {
                            progress = currentProgress;

                            this.emit('progress', progress);
                        }
                    })
                    .on('error', error => {
                        this.emit('error', error);
                    })
                    .on('end', () => {
                        this.emit('end');
                    })
                    .pipe(stream);
            })
            .catch(e => {
                console.log('Загрузка не удалась');
            });
    }
};