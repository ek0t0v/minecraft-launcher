import VueRouter from 'vue-router';
import Home from '../pages/Home';
import Settings from '../pages/Settings';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
        },
        {
            path: '/settings',
            component: Settings,
            name: 'settings',
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
});

export default router;