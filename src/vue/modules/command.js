const process = require('child_process');

export function execute(command, callback) {
    process.exec(command, (error, stdout, stderr) => {
        callback(stdout);
        callback(stderr);
    });
}