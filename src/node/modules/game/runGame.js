const { app } = require('electron');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const sendMessageToRenderer = require('../modules/util/sendMessageToRenderer');

/**
 * Запускает игру.
 *
 * @param versionId
 * @param userId
 *
 * @returns {Promise<void>}
 */
module.exports = async function runGame(versionId, userId) {
    // проверяем, установлен ли JRE и правилен ли он (ОС, разрядность)
    if (!await require('../java/checkJava')()) {
        // если что-то не так, загружаем правильный JRE в папку лаунчера
        await require('../java/downloadJava')();
    }

    // проверяем, установлен ли клиент для этой версии
    // если нет, загружаем
    // когда клиент установлен - записываем версию в конфиг (поле lastVersion)
    // сверяем файлы на сервере и клиенте
    // сворачиваем лаунчер и запускаем игру

    const version = '1.13.2'; // нужно достать по versionId
    const javaPath = app.getPath('appData').concat('/Launcher/jre/jre-8u201-linux-x64/bin/java');
    const gameDir = '/home/cote/.minecraft';
    const librariesDir = `${ gameDir }/libraries`;
    const versionsDir = `${ gameDir }/versions`;
    const versionDir = `${ versionsDir }/${ version }`;
    const nativesPath = `${ versionDir }/natives`;
    const gameJar = `${ versionDir }/${ version }.jar`;
    const mainClass = 'net.minecraft.client.main.Main';
    const accessToken = 'token';
    const libs = [
        '/com/mojang/patchy/1.1/patchy-1.1.jar',
        '/com/mojang/brigadier/1.0.14/brigadier-1.0.14.jar',
        '/com/mojang/datafixerupper/1.0.19/datafixerupper-1.0.19.jar',
        '/com/mojang/realms/1.13.9/realms-1.13.9.jar',
        '/com/mojang/authlib/1.5.25/authlib-1.5.25.jar',
        '/com/mojang/text2speech/1.10.3/text2speech-1.10.3.jar',
        '/net/java/dev/jna/jna/4.4.0/jna-4.4.0.jar',
        '/net/java/dev/jna/platform/3.4.0/platform-3.4.0.jar',
        '/net/java/jinput/jinput/2.0.5/jinput-2.0.5.jar',
        '/net/java/jutils/jutils/1.0.0/jutils-1.0.0.jar',
        '/org/apache/commons/commons-lang3/3.5/commons-lang3-3.5.jar',
        '/org/apache/commons/commons-compress/1.8.1/commons-compress-1.8.1.jar',
        '/org/apache/httpcomponents/httpclient/4.3.3/httpclient-4.3.3.jar',
        '/org/apache/logging/log4j/log4j-api/2.8.1/log4j-api-2.8.1.jar',
        '/org/apache/logging/log4j/log4j-core/2.8.1/log4j-core-2.8.1.jar',
        '/org/apache/httpcomponents/httpcore/4.3.2/httpcore-4.3.2.jar',
        '/org/lwjgl/lwjgl/3.1.6/lwjgl-3.1.6.jar',
        '/org/lwjgl/lwjgl-jemalloc/3.1.6/lwjgl-jemalloc-3.1.6.jar',
        '/org/lwjgl/lwjgl-openal/3.1.6/lwjgl-openal-3.1.6.jar',
        '/org/lwjgl/lwjgl-opengl/3.1.6/lwjgl-opengl-3.1.6.jar',
        '/org/lwjgl/lwjgl-glfw/3.1.6/lwjgl-glfw-3.1.6.jar',
        '/org/lwjgl/lwjgl-stb/3.1.6/lwjgl-stb-3.1.6.jar',
        '/com/google/guava/guava/21.0/guava-21.0.jar',
        '/com/google/code/gson/gson/2.8.0/gson-2.8.0.jar',
        '/com/paulscode/codecjorbis/20101023/codecjorbis-20101023.jar',
        '/com/paulscode/codecwav/20101023/codecwav-20101023.jar',
        '/com/paulscode/libraryjavasound/20101123/libraryjavasound-20101123.jar',
        '/com/paulscode/soundsystem/20120107/soundsystem-20120107.jar',
        '/commons-io/commons-io/2.5/commons-io-2.5.jar',
        '/commons-codec/commons-codec/1.10/commons-codec-1.10.jar',
        '/commons-logging/commons-logging/1.1.3/commons-logging-1.1.3.jar',
        '/io/netty/netty-all/4.1.25.Final/netty-all-4.1.25.Final.jar',
        '/com/ibm/icu/icu4j-core-mojang/51.2/icu4j-core-mojang-51.2.jar',
        '/net/sf/jopt-simple/jopt-simple/5.0.3/jopt-simple-5.0.3.jar',
        '/it/unimi/dsi/fastutil/8.2.1/fastutil-8.2.1.jar',
        '/oshi-project/oshi-core/1.1/oshi-core-1.1.jar',
    ].map(library => librariesDir.concat(library)).join(':');

    const command = [
        javaPath,
        `-Djava.library.path=${ nativesPath }`,
        `-cp ${ libs }:${ gameJar }`,
        mainClass,
        `--gameDir ${ gameDir }`,
        `--version ${ version }`,
        `--accessToken ${ accessToken }`
    ].join(' ');

    const { stdout, stderr } = await exec(command);

    console.log('stdout:', stdout);
    console.log('stderr:', stderr);

    sendMessageToRenderer('game:started');
};