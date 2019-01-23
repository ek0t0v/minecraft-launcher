import store from '../store';

const ipc = require('ipc');

ipc.on('bootstrap:step', (e, payload) => {
    store.dispatch('loading/setStep', payload);
});

ipc.on('bootstrap:finished', () => {
    store.dispatch('loading/stop');
});