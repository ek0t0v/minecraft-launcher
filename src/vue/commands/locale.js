const ipc = require('ipc');

export function loadLocales() {
    ipc.send('locale:load');
}