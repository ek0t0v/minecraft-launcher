'use strict';

const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');
const rimraf = require('rimraf');
const constants = require('../../constants');
const pushVersionToInstalledVersions = require('../config/pushVersionToInstalledVersions');
const isJavaInstalled = require('../java/isInstalled');
const downloadJava = require('../java/download');
const loadVersions = require('../version/loadVersions');
const isVersionInstalled = require('../version/isInstalled');
const downloadVersion = require('../version/download');
const sendMessageToRenderer = require('../util/sendMessageToRenderer');
const unpackTar = require('../util/unpackTar');
const trans = require('../util/trans');

/**
 * @param versionId
 * @param userId
 * @param options
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
    const javaInstallNeeded = !await isJavaInstalled();

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
        rimraf.sync(constants.path.tmp);

        updateConfig('installedVersions')

        progress += constants.launchCheckpoints.UNPACK_JAVA.duration;
    } else {
        progress += constants.launchCheckpoints.DOWNLOAD_JAVA.duration;
        progress += constants.launchCheckpoints.UNPACK_JAVA.duration;
    }

    sendMessageToRenderer('launch:progress', {
        step: trans(constants.launchCheckpoints.CHECK_VERSION.message),
        progress,
    });
    const versionsData = await loadVersions();
    const versionData = versionsData.filter(version => {
        return version.id === versionId;
    })[0];
    const versionInstallNeeded = !await isVersionInstalled(versionData.id);

    progress += constants.launchCheckpoints.CHECK_VERSION.duration;

    if (versionInstallNeeded) {
        sendMessageToRenderer('launch:progress', {
            step: trans(constants.launchCheckpoints.DOWNLOAD_VERSION.message),
            progress,
        });
        const versionPath = await downloadVersion(
            versionData.slug,
            constants.launchCheckpoints.DOWNLOAD_VERSION.duration,
            constants.launchCheckpoints.DOWNLOAD_VERSION.message,
            progress,
        );

        progress += constants.launchCheckpoints.DOWNLOAD_VERSION.duration;

        sendMessageToRenderer('launch:progress', {
            step: trans(constants.launchCheckpoints.UNPACK_VERSION.message),
            progress,
        });

        const versionDir = `${constants.path.versions}${path.sep}${versionData.slug}`;

        if (!fs.existsSync(constants.path.minecraft)) {
            fs.mkdirSync(constants.path.minecraft);
        }

        if (!fs.existsSync(constants.path.versions)) {
            fs.mkdirSync(constants.path.versions);
        }

        rimraf.sync(versionDir);
        fs.mkdirSync(versionDir);

        await unpackTar(versionPath, versionDir);
        rimraf.sync(constants.path.tmp);

        pushVersionToInstalledVersions(versionData);

        progress += constants.launchCheckpoints.UNPACK_VERSION.duration;
    } else {
        progress += constants.launchCheckpoints.DOWNLOAD_VERSION.duration;
        progress += constants.launchCheckpoints.UNPACK_VERSION.duration;
    }

    sendMessageToRenderer('launch:progress', {
        step: trans(constants.launchCheckpoints.RUN.message),
        progress,
    });

    global.window.minimize();

    const ls = spawn('java', [
        '-jar',
    ]);

    // todo: После запуска игры, записать версию в конфиг, поле lastVersion.

    ls.on('exit', code => {
        setTimeout(() => {
            global.window.show()
        }, 2000);
        console.log(`Exit code is: ${code}`);
    });

    sendMessageToRenderer('launch:done');

    global.isLaunching = false;
};