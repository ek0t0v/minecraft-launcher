const ipc = require('ipc');

ipc.on('game:started', () => {
    console.log('game:started');
});