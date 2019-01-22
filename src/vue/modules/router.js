import VueRouter from 'vue-router';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Accounts from '../pages/Accounts';
import About from '../pages/About';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
        },
        {
            path: '/accounts',
            component: Accounts,
            name: 'accounts',
        },
        {
            path: '/settings',
            component: Settings,
            name: 'settings',
        },
        {
            path: '/about',
            component: About,
            name: 'about',
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
});

export default router;