const ipc = require('electron').ipcMain;
const sendMessageToRenderer = require('../modules/util/sendMessageToRenderer');
// const checkJava = require('../modules/java/check');
// const ls = require('../modules/java/check');
// const os = require('os');

ipc.on('game:start', (e, payload) => {
    // todo: Need to implement.

    // в payload лежит id версии которую надо запустить
    // проверяем, установлена ли java
    // если нет, устанавливаем (портативная версия, ставим в папку лаунчера)
    // проверяем, установлен ли клиент для этой версии
    // если нет, загружаем
    // сверяем файлы на сервере и клиенте
    // если что-то не так, выдаем ошибку
    // сворачиваем лаунчер и запускаем игру

    require('../modules/game/runGame')('1.13.2');

    sendMessageToRenderer('game:started');
});