/**
 * Устанавливает выбранную версию.
 *
 * @param version
 *
 * @returns {Promise<*>}
 */
module.exports = async function installVersion(version) {
    return version;

    // информацию о версии забираем отсюда https://launchermeta.mojang.com/v1/packages/df66b5a5f451d026c356ead8caf118c71919850b/1.13.2.json
    // загружаем версию в виде архива
    // загружаем assets (качается отсюда http://resources.download.minecraft.net/00/00b38fae5d28d99514a3e73a913af16359b12b7a)
};