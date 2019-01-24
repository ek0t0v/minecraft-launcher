import Vue from 'vue';
import VueRouter from 'vue-router';
import PageHome from '../components/PageHome';
import PageSettings from '../components/PageSettings';
import PageAccounts from '../components/PageAccounts';
import PageAbout from '../components/PageAbout';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: PageHome,
            name: 'home',
        },
        {
            path: '/accounts',
            component: PageAccounts,
            name: 'accounts',
        },
        {
            path: '/settings',
            component: PageSettings,
            name: 'settings',
        },
        {
            path: '/about',
            component: PageAbout,
            name: 'about',
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
});

export default router;