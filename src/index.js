import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n'
import router from './modules/router';
import App from './components/App';
import store from './store';
import en from './locales/en';
import ru from './locales/ru';
import '../src/less/style.less';
import '@fortawesome/fontawesome-free/css/all.min.css';
const ipc = require('ipc');

ipc.send('loadConfig');
ipc.on('loadConfig', (e, payload) => {
    store.dispatch('config/init', payload);

    Vue.use(VueRouter);
    Vue.use(VueI18n);

    const i18n = new VueI18n({
        locale: payload.locale,
        fallbackLocale: 'en',
        messages: {
            en,
            ru,
        },
    });

    new Vue({
        el: '#app',
        router,
        store,
        i18n,
        render: h => h(App),
    });
});

