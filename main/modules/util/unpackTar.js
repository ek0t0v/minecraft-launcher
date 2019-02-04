'use strict';

const fs = require('fs');
const tar = require('tar');

module.exports = function unpackTar(src, dest) {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest);
        }

        tar.x({
            file: src,
            cwd: dest,
            strict: true,
        })
            .then(() => resolve())
            .catch(e => {
                console.log(e);
                reject();
            });
    });
};