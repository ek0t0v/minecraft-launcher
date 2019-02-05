'use strict';

const { app } = require('electron');
const path = require('path');

module.exports = Object.freeze({
    path: {
        java: `${ app.getPath('userData') }${ path.sep }java`,
        minecraft: `${ app.getPath('userData') }${ path.sep }minecraft`,
        versions: `${ app.getPath('userData') }${ path.sep }minecraft${ path.sep }versions`,
        tmp: `${ app.getPath('userData') }${ path.sep }tmp`,
    },
    assetsUrl: 'http://resources.download.minecraft.net',
    versionsApiBaseUrl: 'https://my-json-server.typicode.com/seniorcote/test-api/versions',
    launchCheckpoints: {
        CHECK_JAVA: {
            message: 'launchCheckpoint.checkJava',
            duration: 2,
        },
        DOWNLOAD_JAVA: {
            message: 'launchCheckpoint.downloadJava',
            duration: 25,
        },
        UNPACK_JAVA: {
            message: 'launchCheckpoint.unpackJava',
            duration: 5,
        },
        CHECK_VERSION: {
            message: 'launchCheckpoint.checkVersion',
            duration: 2,
        },
        DOWNLOAD_VERSION: {
            message: 'launchCheckpoint.downloadVersion',
            duration: 59,
        },
        UNPACK_VERSION: {
            message: 'launchCheckpoint.unpackVersion',
            duration: 5,
        },
        RUN: {
            message: 'launchCheckpoint.run',
            duration: 2,
        },
    },
    javaVersions: {
        linux: {
            x32: {
                url: 'http://5-187-10790-3.b.cdn12.com/jre/jre-8u201-linux-i586.tar.gz',
                sha1: 'YfFxg9u2a0R8MVFr072yqiQEua8=',
            },
            x64: {
                url: 'http://5-187-10790-3.b.cdn12.com/jre/jre-8u201-linux-x64.tar.gz',
                sha1: 'DuLdfTNb3zD1v5UUKLF0ut5FtlM=',
            },
        },
        win32: {
            x32: {
                url: 'http://5-187-10790-3.b.cdn12.com/jre/jre-8u201-windows-i586.tar.gz',
                sha1: 'KF9ThXYjeVMRqpIHUlJntkwn47w=',
            },
            x64: {
                url: 'http://5-187-10790-3.b.cdn12.com/jre/jre-8u201-windows-x64.tar.gz',
                sha1: 'e0hP8UpvNZEU6EcnAE5ozMZ6y5U=',
            },
        },
        darwin: {
            x64: {
                url: 'http://5-187-10790-3.b.cdn12.com/jre/jre-8u201-macosx-x64.tar.gz',
                sha1: 'C4ETp+wLyETEQCwMh3XgBKNlae4=',
            },
        },
    },
});