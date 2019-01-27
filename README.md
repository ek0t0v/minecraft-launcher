# launcher

## Установка и запуск

- `npm install & npm run build` установить зависимости и собрать приложение
- `npm start` запустить приложение

## Сборка

- `npm run package` сборка под все платформы
- `npm run package-windows` сборка под Windows
- `npm run package-linux` сборка под Linux
- `npm run package-mac` сборка под Mac

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

https://launchermeta.mojang.com/mc/game/version_manifest.json