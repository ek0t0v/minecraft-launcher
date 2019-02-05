import store from '../store';

const ipc = require('ipc');

ipc.on('launch:started', () => {
    store.dispatch('loading/start');
});

ipc.on('launch:progress', (e, payload) => {
    store.dispatch('loading/setStep', {
        step: payload.step,
        progress: payload.progress,
    });
});

ipc.on('launch:done', () => {
    store.dispatch('loading/stop');
});

ipc.on('launch:error', (e, payload) => {
    alert(payload.error);
});