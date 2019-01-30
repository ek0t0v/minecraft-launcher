const { app } = require('electron');
const os = require('os');
const fs = require('fs');
const path = require('path');
const request = require('request');
const decompress = require('targz').decompress;
const sendMessageToRenderer = require('../util/sendMessageToRenderer');

const jreVersions = {
    linux: {
        x32: 'http://5-187-10790-3.b.cdn12.com/jre/jre-8u201-linux-i586.tar.gz',
        x64: 'http://5-187-10790-3.b.cdn12.com/jre/jre-8u201-linux-x64.tar.gz',
    },
    win32: {
        x32: 'http://5-187-10790-3.b.cdn12.com/jre/jre-8u201-windows-i586.tar.gz',
        x64: 'http://5-187-10790-3.b.cdn12.com/jre/jre-8u201-windows-x64.tar.gz',
    },
    darwin: {
        x64: 'http://5-187-10790-3.b.cdn12.com/jre/jre-8u201-macosx-x64.tar.gz',
    },
};

/**
 * Загружает java.
 *
 * @returns {Promise<void>}
 */
module.exports = async function downloadJavaFromUcdn() {
    const downloadUrl = jreVersions[os.platform()][os.arch()];
    const uploadDir = app.getPath('userData');
    const file = downloadUrl.substr(downloadUrl.lastIndexOf('/') + 1);
    const stream = fs.createWriteStream(uploadDir.concat(path.sep).concat(file));

    const size = await require('../util/getContentLength')(downloadUrl);

    console.log(size);

    return;

    request
        .get({
            url: jreVersions[os.platform()][os.arch()],
            rejectUnauthorized: false,
            agent: false,
            headers: {
                connection: 'keep-alive',
            },
        })
        .on('response', response => {
            // const length = parseInt(response.headers['content-length'], 10);

            // response.on('data', chunk => {
            //     console.log(chunk.length);
            // });
        })
        .on('error', error => {
            throw `Problem with request: ${ error.message }`;
        })
        .on('end', () => {
            decompress({
                src: uploadDir.concat(path.sep).concat(file),
                dest: uploadDir,
            }, error => {
                if (error) console.log('Не удалось распаковать архив.');

                console.log(`Готово! Распаковано сюда: ${ jrePath }`);
            });
        })
        .pipe(stream);
};