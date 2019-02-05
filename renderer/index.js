import Vue from 'vue';
import App from './components/App';
import Modal from './plugins/Modal';
import store from './store';
import router from './modules/router';
import i18n from './modules/i18n';
import './styles/style.less';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './listeners';

Vue.use(Modal);

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App),
});