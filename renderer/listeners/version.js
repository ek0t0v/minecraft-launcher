import store from '../store';

const ipc = require('ipc');

ipc.on('versions:loaded', (e, payload) => {
    store.dispatch('config/updateConfig', {
        key: 'versions',
        value: payload.items,
    });
    store.dispatch('config/stopVersionsLoading');
});