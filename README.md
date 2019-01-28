# launcher

## Установка и запуск

- `docker-compose run node npm install & docker-compose run node npm run build` установить зависимости и собрать приложение
- `docker-compose run node npm start` запустить приложение

## Сборка

- `docker-compose run node npm run package` сборка под все платформы
- `docker-compose run node npm run package-windows` сборка под Windows
- `docker-compose run node npm run package-linux` сборка под Linux
- `docker-compose run node npm run package-mac` сборка под Mac

## API версий

Существует три типа версий (поле `type`):

- ванильная (0)
- сервер без собственного клиента (1)
- сервер с собственным клиентом (2)

Пример ответа:

```json
[
    {
        "id": 1,
        "name": "1.13.2 (ванильная версия)",
        "type": 0,
        "clientUrl": "https://google.com",
        "version": null
    },
    {
        "id": 2,
        "name": "Сервер без собственного клиента",
        "type": 1,
        "clientUrl": null,
        "version": {
            "id": 1,
            "name": "1.13.2 (ванильная версия)",
            "type": 0,
            "clientUrl": "https://google.com",
            "version": null
        }
    },
    {
        "id": 3,
        "name": "Сервер с собственным клиентом",
        "type": 2,
        "clientUrl": "https://google.com",
        "version": null
    }
]
```

## Notes

https://wiki.vg/Game_files
https://launchermeta.mojang.com/mc/game/version_manifest.json