const ipc = require('ipc');

ipc.on('versions:loaded', (e, payload) => {
    console.log('versions:loaded')
});