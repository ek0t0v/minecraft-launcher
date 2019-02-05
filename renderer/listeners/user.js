import store from '../store';

const ipc = require('ipc');

ipc.on('user:created', (e, payload) => {
    store.dispatch('user/createUser', payload);
});

ipc.on('user:removed', (e, payload) => {
    store.dispatch('user/removeUser', payload);
});