const ipc = require('electron').ipcMain;
const sendMessageToRenderer = require('../modules/sendMessageToRenderer');

ipc.on('game:start', (e, payload) => {
    // todo: Need to implement.

    // в payload лежит id версии которую надо запустить
    // проверяем, установлена ли java
    // если нет, устанавливаем
    // проверяем, установлен ли клиент для этой версии
    // если нет, загружаем
    // сверяем файлы на сервере и клиенте
    // если что-то не так, выдаем ошибку
    // сворачиваем лаунчер и запускаем игру

    sendMessageToRenderer('game:started');
});