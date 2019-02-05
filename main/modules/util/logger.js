'use strict';

const fs = require('fs');

module.exports.log = function log(data, dest) {
    fs.appendFileSync(dest, `${data}\n`);
};