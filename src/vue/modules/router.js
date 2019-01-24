import Vue from 'vue';
import VueRouter from 'vue-router';
import PageHome from '../components/Page/PageHome';
import PageSettings from '../components/Page/PageSettings';
import PageAccounts from '../components/Page/PageAccounts';
import PageAbout from '../components/Page/PageAbout';

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