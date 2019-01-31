'use strict';

const { app } = require('electron');
const path = require('path');

module.exports = Object.freeze({
    path: {
        java: app.getPath('userData').concat(path.sep).concat('java'),
        assets: app.getPath('userData').concat(path.sep).concat('assets'),
        versions: app.getPath('userData').concat(path.sep).concat('versions'),
        tmp: app.getPath('userData').concat(path.sep).concat('tmp'),
    },
    launchCheckpoints: {
        CHECK_JAVA: {
            message: 'launchCheckpoint.checkJava',
            duration: 2,
        },
        DOWNLOAD_JAVA: {
            message: 'launchCheckpoint.downloadJava',
            duration: 20,
        },
        UNPACK_JAVA: {
            message: 'launchCheckpoint.unpackJava',
            duration: 5,
        },
        CHECK_VERSION: {
            message: 'launchCheckpoint.checkVersion',
            duration: 2,
        },
        DOWNLOAD_CLIENT: {
            message: 'launchCheckpoint.downloadClient',
            duration: 20,
        },
        UNPACK_CLIENT: {
            message: 'launchCheckpoint.unpackClient',
            duration: 5,
        },
        CHECK_ASSETS: {
            message: 'launchCheckpoint.checkAssets',
            duration: 5,
        },
        DOWNLOAD_ASSETS: {
            message: 'launchCheckpoint.downloadAssets',
            duration: 35,
        },
        CHECK_CLIENT_CHECKSUM: {
            message: 'launchCheckpoint.checkClientChecksum',
            duration: 4,
        },
        RUN: {
            message: 'launchCheckpoint.run',
            duration: 2,
        },
    },
    javaVersions: {
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
    },
});