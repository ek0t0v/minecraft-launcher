import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n'
import router from './modules/router';
import App from './components/App';
import en from './locales/en';
import ru from './locales/ru';
import '../src/less/style.less';

Vue.use(VueRouter);
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        ru,
    },
});

new Vue({
    el: '#app',
    router,
    i18n,
    render: h => h(App),
});