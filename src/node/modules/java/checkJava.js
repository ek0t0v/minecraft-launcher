const util = require('util');
const exec = util.promisify(require('child_process').exec);

/**
 * Проверяет, установлена ли java и правильная ли она (ОС, разрядность).
 *
 * @returns {Promise<void>}
 */
module.exports = async function checkJava() {
    const { stdout, stderr } = await exec('java -version');
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
};

// module.exports = async function ls() {
//     const { stdout, stderr } = await exec('ls');
//     console.log('stdout:', stdout);
//     console.log('stderr:', stderr);
// };