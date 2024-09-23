import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/home/index.vue';
import About from '../pages/about/index.vue';
import NotFound from '../pages/notFound/index.vue';

export const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
    history: createWebHistory('fe'),
    routes,
});

export default router;
