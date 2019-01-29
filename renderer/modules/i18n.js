import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '../../resources/locales/en';
import ru from '../../resources/locales/ru';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        ru,
    },
});

export default i18n;