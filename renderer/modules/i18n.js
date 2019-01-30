import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '../../resources/locales/en';
import ru from '../../resources/locales/ru';
import uk from '../../resources/locales/uk';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        ru,
        uk,
    },
});

export default i18n;