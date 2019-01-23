const ipc = require('ipc');

export function bootstrap() {
    ipc.send('bootstrap:start');
}