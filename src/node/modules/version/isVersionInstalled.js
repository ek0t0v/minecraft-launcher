/**
 * Проверяет, установлена ли версия.
 *
 * @param version
 *
 * @returns {boolean}
 */
module.exports = function isVersionInstalled(version) {
    return version.id === 1 || version.id === 2;
};