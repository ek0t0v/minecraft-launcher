import store from '../store';

const ipc = require('ipc');

ipc.on('config:load:success', (e, payload) => {
    store.dispatch('config/init', payload);
});