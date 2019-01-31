'use strict';

const constants = require('../constants');
const sendMessageToRenderer = require('../util/sendMessageToRenderer');
const trans = require('../util/trans');
const isJavaInstalled = require('../java/isInstalled');
const downloadJava = require('../java/download');
const unpackTar = require('../util/unpackTar');

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

    let progress = 0;

    sendMessageToRenderer('launch:progress', {
        step: trans(constants.launchCheckpoints.CHECK_JAVA.message),
        progress,
    });
    const javaInstallNeeded = !isJavaInstalled();

    progress += constants.launchCheckpoints.CHECK_JAVA.duration;

    if (javaInstallNeeded) {
        sendMessageToRenderer('launch:progress', {
            step: trans(constants.launchCheckpoints.DOWNLOAD_JAVA.message),
            progress,
        });
        const javaTarPath = await downloadJava(
            constants.launchCheckpoints.DOWNLOAD_JAVA.duration,
            constants.launchCheckpoints.DOWNLOAD_JAVA.message,
            progress,
        );

        progress += constants.launchCheckpoints.DOWNLOAD_JAVA.duration;

        sendMessageToRenderer('launch:progress', {
            step: trans(constants.launchCheckpoints.UNPACK_JAVA.message),
            progress,
        });
        await unpackTar(javaTarPath, constants.path.java);

        progress += constants.launchCheckpoints.UNPACK_JAVA.duration;
    } else {
        progress += constants.launchCheckpoints.DOWNLOAD_JAVA.duration;
        progress += constants.launchCheckpoints.UNPACK_JAVA.duration;
    }

    // чекаем версию

    // загружаем версию

    // распаковываем версию

    // проверяем ассеты

    // загружаем ассеты

    // todo: Записывать lastVersion в конфиг, когда версия игры установлена.

    // проверяем что с клиентом все ок (контрольная сумма и т.п.)

    // запускаем игру

    sendMessageToRenderer('launch:done');

    global.isLaunching = false;
};