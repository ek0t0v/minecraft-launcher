'use strict';

/**
 * @param version
 *
 * @returns {Promise<*>}
 */
module.exports = async function installVersion(version) {
    return version;

    // загружаем версию в виде архива (внутри будет версия, natives, assets и все нужное)

    // информацию о версии забираем отсюда https://launchermeta.mojang.com/v1/packages/df66b5a5f451d026c356ead8caf118c71919850b/1.13.2.json
    // если что, ассеты качаются отсюда http://resources.download.minecraft.net/00/00b38fae5d28d99514a3e73a913af16359b12b7a
    // список ассетов тут https://launchermeta.mojang.com/v1/packages/f776dabd6239938411e2f123837f4005b74e49f8/1.13.1.json
};