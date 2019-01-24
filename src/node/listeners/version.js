const ipc = require('electron').ipcMain;
const sendMessageToRenderer = require('../modules/sendMessageToRenderer');
const fetch = require('node-fetch');

ipc.on('versions:load', () => {
    // todo: Need to implement.

    let versions = [
        {
            id: 1,
            name: 'Lotmine',
            isInstalled: true,
        },
        {
            id: 2,
            name: 'ForsCraft МиниИгры 1.8-1.12.2',
            isInstalled: false,
        },
        {
            id: 3,
            name: 'MineLegacy 1.8-1.13.2 Survival',
            isInstalled: false,
        },
        {
            id: 4,
            name: 'NexusCraft 1.8-1.13.2',
            isInstalled: false,
        },
        {
            id: 5,
            name: 'LuckyWorld PVP 1.8-1.12.2',
            isInstalled: false,
        },
        {
            id: 6,
            name: 'BattleCraft 1.12.2',
            isInstalled: false,
        },
        {
            id: 7,
            name: 'SuperMine NoDupe 1.8-1.12.2',
            isInstalled: false,
        },
        {
            id: 8,
            name: 'MineBars - NoDupe-PvP-Games',
            isInstalled: false,
        },
        {
            id: 9,
            name: 'McSkill.ru - МНОГО МОДОВ',
            isInstalled: false,
        },
    ];

    fetch('http://httpstat.us/200?sleep=5000')
        .then(response => response.text())
        .then(() => {
            // в конфиге уже имеем версии, где клиенты уже установлены + выбранную в прошлый сеанс версию
                // если в конфиге нет версий, дизейблим селект, ждем пока загрузятся
            // ставим эти версии в селект, но лоадер продолжает крутиться
            // получаем версии, мержим их с версиями из конфига
            // убираем лоадер

            // если версия установлена, но на сервере удалена
                // показать ошибку юзеру и удалить сервер

            sendMessageToRenderer('versions:loaded', {
                items: versions,
            });
        })
        .catch(e => {
            throw e;
        });
});

ipc.on('version:install', () => {
    // todo: Need to implement.

    sendMessageToRenderer('version:installed');
});

ipc.on('version:uninstall', () => {
    // todo: Need to implement.

    sendMessageToRenderer('version:uninstalled');
});