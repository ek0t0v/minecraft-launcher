'use strict';

const _ = require('lodash');

module.exports = function trans(key) {
    return _.get(global.translations, key);
};