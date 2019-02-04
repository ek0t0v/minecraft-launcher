# launcher

## Установка и запуск

- `docker-compose run node npm install && docker-compose run node npm run build` установить зависимости и собрать приложение
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
        "isActive": true,
        "name": "1.13.2",
        "slug": "1.13.2",
        "type": 0,
        "clientUrl": "http://5-187-10790-3.b.cdn12.com/versions/1.13.2",
        "version": null,
        "arguments": {
            "game": [],
            "jvm": []
        }
    },
    {
        "id": 2,
        "isActive": false,
        "name": "Lotmine",
        "slug": "lotmine",
        "type": 2,
        "clientUrl": "https://google.com",
        "version": null,
        "arguments": {
            "game": [],
            "jvm": []
        }
    },
    {
        "id": 3,
        "isActive": false,
        "name": "ForsCraft МиниИгры 1.8-1.12.2",
        "slug": "forscraft",
        "type": 1,
        "clientUrl": null,
        "version": {
            "id": 1,
            "isActive": true,
            "name": "1.13.2",
            "slug": "1.13.2",
            "type": 0,
            "clientUrl": "https://google.com",
            "version": null,
            "arguments": {
                "game": [],
                "jvm": []
            }
        },
        "arguments": {
            "game": [],
            "jvm": []
        }
    },
    {
        "id": 4,
        "isActive": true,
        "name": "MineLegacy 1.8-1.13.2 Survival",
        "slug": "minelegacy",
        "type": 1,
        "clientUrl": null,
        "version": {
            "id": 1,
            "isActive": true,
            "name": "1.13.2",
            "slug": "1.13.2",
            "type": 0,
            "clientUrl": "https://google.com",
            "version": null,
            "arguments": {
                "game": [],
                "jvm": []
            }
        },
        "arguments": {
            "game": [],
            "jvm": []
        }
    }
]
```

## Notes

https://wiki.vg/Game_files
https://launchermeta.mojang.com/mc/game/version_manifest.json