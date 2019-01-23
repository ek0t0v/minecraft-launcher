import store from '../store';

const ipc = require('ipc');

ipc.on('config:loaded', (e, payload) => {
    store.dispatch('config/init', payload);
});