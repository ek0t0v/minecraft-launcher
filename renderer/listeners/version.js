import store from '../store';

const ipc = require('ipc');

ipc.on('versions:loaded', (e, payload) => {
    store.dispatch('version/setItems', payload);
    store.dispatch('version/stopLoading');
});

ipc.on('version:installed', () => {
    // todo: Need to implement.
});

ipc.on('version:uninstalled', () => {
    // todo: Need to implement.
});