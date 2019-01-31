'use strict';

module.exports = Object.freeze({
    launchCheckpoints: {
        CHECK_JAVA: {
            doneOn: 2,
            translation: 'launchCheckpoint.checkJava',
        },
        DOWNLOAD_JAVA: {
            doneOn: 22,
            translation: 'launchCheckpoint.downloadJava',
        },
        UNPACK_JAVA: {
            doneOn: 27,
            translation: 'launchCheckpoint.unpackJava',
        },
        CHECK_VERSION: {
            doneOn: 29,
            translation: 'launchCheckpoint.checkVersion',
        },
        DOWNLOAD_CLIENT: {
            doneOn: 49,
            translation: 'launchCheckpoint.downloadClient',
        },
        UNPACK_CLIENT: {
            doneOn: 54,
            translation: 'launchCheckpoint.unpackClient',
        },
        CHECK_ASSETS: {
            doneOn: 59,
            translation: 'launchCheckpoint.checkAssets',
        },
        DOWNLOAD_ASSETS: {
            doneOn: 94,
            translation: 'launchCheckpoint.downloadAssets',
        },
        CHECK_CLIENT_CHECKSUM: {
            doneOn: 98,
            translation: 'launchCheckpoint.checkClientChecksum',
        },
        RUN: {
            doneOn: 100,
            translation: 'launchCheckpoint.run',
        },
    },
    jreVersions: {
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