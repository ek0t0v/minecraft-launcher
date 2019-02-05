'use strict';

const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const defaultOptions = {
    javaPath: null,
    versionJarPath: null,
    mainClass: null,
    gamePath: null,
    nativesPath: null,
    librariesPath: null,
    assetsPath: null,
    version: null,
    versionPath: null,
    versionType: null,
    maxMemorySize: 1024,
    width: 925,
    height: 530,
    assetIndex: null,
    username: null,
    uuid: null,
    accessToken: null,
    userType: 'legacy',
    jvmArgs: [],
    gameArgs: [],
    launcherBrand: 'launcher',
    launcherVersion: '0.0.6',
};

module.exports = function getLaunchCommand(options) {
    try {
        options = mergeOptions(options);
    } catch (e) { throw e }

    return []
        .concat(options.javaPath)
        .concat([
            `-XX:+UseConcMarkSweepGC`,
            `-XX:-UseAdaptiveSizePolicy`,
            `-XX:+CMSParallelRemarkEnabled`,
            `-XX:+ParallelRefProcEnabled`,
            `-XX:+CMSClassUnloadingEnabled`,
            `-XX:+UseCMSInitiatingOccupancyOnly`,
            `-Dfile.encoding=UTF-8`,
            `-Xss1M`,
            `-Xmx${ options.maxMemorySize }M`,
            `-Djava.library.path=${ options.nativesPath }`,
            `-Dminecraft.launcher.brand=${ options.launcherBrand }`,
            `-Dminecraft.launcher.version=${ options.launcherVersion }`,
        ])
        .concat(options.jvmArgs)
        .concat(`-cp`)
        .concat(getLibrariesAsString(options))
        .concat(options.mainClass)
        .concat([
            `--username ${ options.username }`,
            `--gameDir ${ options.gamePath }`,
            `--version ${ options.version }`,
            `--accessToken ${ options.accessToken }`,
            `--uuid ${ options.uuid }`,
            `--userType ${ options.userType }`,
            `--versionType ${ options.versionType }`,
            `--width ${ options.width }`,
            `--height ${ options.height }`,
            `--assetsDir ${ options.assetsPath }`,
            `--assetIndex ${ options.assetIndex }`,
        ])
        .concat(options.gameArgs)
        .join(' ');
};

function mergeOptions(options) {
    options = _.merge(defaultOptions, options);

    const isSomeOptionsIsNotValid = [
        options.javaPath,
        options.versionJarPath,
        options.mainClass,
        options.gamePath,
        options.nativesPath,
        options.librariesPath,
        options.assetsPath,
        options.version,
        options.versionPath,
        options.versionType,
        options.assetIndex,
        options.username,
        options.uuid,
        options.accessToken,
    ].some(option => [undefined, null, ''].includes(option));

    if (isSomeOptionsIsNotValid) {
        throw 'Some options is not valid.';
    }

    return options;
}

function getLibrariesAsString(options) {
    let libraries = [];

    fs
        .readdirSync(options.librariesPath)
        .forEach(file => libraries.push(`${ options.librariesPath }${ path.sep }${ file }`));

    libraries.push(options.versionJarPath);

    return libraries.join(path.delimiter);
}