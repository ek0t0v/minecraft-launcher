const ipc = require('ipc');

export function createUser(user) {
    ipc.send('user:create', user);
}

export function removeUser(user) {
    ipc.send('user:remove', user);
}