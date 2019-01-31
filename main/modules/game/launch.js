'use strict';

const { app } = require('electron');
const os = require('os');
const path = require('path');
const constants = require('../constants');
const sendMessageToRenderer = require('../util/sendMessageToRenderer');
const UrlDownloader = require('../util/UrlDownloader');
const trans = require('../util/trans');

/**
 * @param percents
 * @param step
 * @param initialProgress
 *
 * @returns {Promise<any>}
 */
function downloadJava(percents, step, initialProgress) {
    return new Promise((resolve, reject) => {
        let javaDownloadUrl = constants.jreVersions[os.platform()][os.arch()];
        let javaDestDir = app.getPath('userData').concat(path.sep).concat('tmp');
        let downloader = new UrlDownloader();

        downloader.download(javaDownloadUrl, javaDestDir);
        downloader.on('progress', data => {
            let downloaded = (data.downloaded / 1024).toFixed(2);
            let size = (data.size / 1024).toFixed(2);

            sendMessageToRenderer('launch:progress', {
                step: `${trans(step)} (${downloaded} / ${size})`,
                progress: Math.floor(initialProgress + percents * data.progress / 100),
            });
        });
        downloader.on('end', () => resolve(javaDestDir));
        downloader.on('error', () => reject);
    });
}

/**
 * @param checkpoints
 * @param index
 *
 * @returns {Promise<any>}
 */
function runLaunchTestLoop(checkpoints, index) {
    return new Promise(resolve => {
        if (checkpoints.length === index) {
            resolve();
        }

        setTimeout(async () => {
            let i = 0;

            sendMessageToRenderer('launch:progress', {
                step: trans(checkpoints[index][1].translation),
                progress: checkpoints[index][1].doneOn,
            });

            if (checkpoints[index][0] === 'CHECK_JAVA') {
                let percents = checkpoints[index + 1][1].doneOn - checkpoints[index][1].doneOn;

                await downloadJava(percents, checkpoints[index + 1][1].translation, checkpoints[index][1].doneOn);
            }

            i++;

            if (i < checkpoints[index][1].doneOn) {
                await runLaunchTestLoop(checkpoints, ++index);

                resolve();
            }
        }, checkpoints[index][1].doneOn * 10);
    });
}

/**
 * @param versionId
 * @param userId
 *
 * @returns {Promise<void>}
 */
module.exports = async function launch(versionId, userId, options) {
    if (global.isLaunching) {
        return;
    }

    global.isLaunching = true;

    sendMessageToRenderer('launch:started');

    // чекаем джаву

    // загружаем джаву

    // распаковываем джаву

    // чекаем версию

    // загружаем версию

    // распаковываем версию

    // проверяем ассеты

    // загружаем ассеты

    // todo: Записывать lastVersion в конфиг, когда версия игры установлена.

    // проверяем что с клиентом все ок (контрольная сумма и т.п.)

    // запускаем игру

    await runLaunchTestLoop(Object.entries(constants.launchCheckpoints), 0);

    sendMessageToRenderer('launch:done');

    global.isLaunching = false;
};