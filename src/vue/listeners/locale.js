const ipc = require('ipc');

ipc.on('locale:load:success', (e, payload) => {
    console.log('[on] locale:load:success');
});