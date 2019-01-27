import store from '../store';

const ipc = require('ipc');

ipc.on('config:loaded', (e, payload) => {
    store.dispatch('config/init', payload);
});

ipc.on('loading:file', (e, payload) => {
    store.dispatch('loading/setStep', {
        name: payload.file,
        progress: 0,
    });
});

ipc.on('loading:downloaded', () => {
    store.dispatch('loading/setStep', {
        name: 'ГОТОВО!',
        progress: 0,
    });
    // store.commit('loading/reset');
});