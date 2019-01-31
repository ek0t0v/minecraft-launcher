'use strict';

module.exports = function setLocale(locale) {
    global.locale = locale;
    global.translations = require(`../../../resources/locales/${locale}.json`);
};