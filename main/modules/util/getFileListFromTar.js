'use strict';

const tar = require('tar');
const fs = require('fs');

/**
 * @param path
 *
 * @returns {Promise<any>}
 */
module.exports = function getFileListFromTar(path) {
    const info = {
        numberOfFiles: 0,
        files: [],
    };

    return new Promise((resolve, reject) => {
        fs.createReadStream(path)
            .pipe(tar.t())
            .on('entry', entry => {
                if (entry.type !== 'File') {
                    return;
                }

                info.numberOfFiles++;
                info.files.push({
                    name: entry.path.substr(entry.path.lastIndexOf('/') + 1),
                    nameWithPath: entry.path,
                });
            })
            .on('end', () => resolve(info))
            .on('error', () => reject('Unable to read file list.'));
    });
};