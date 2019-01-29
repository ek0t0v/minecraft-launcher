import Vue from 'vue';
import App from './components/App';
import store from './store';
import router from './modules/router';
import i18n from './modules/i18n';
import './styles/style.less';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './listeners';

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App),
});