import { createRouter, createWebHistory } from 'vue-router';

import Login from '../pages/login/index.vue';
import About from '../pages/about/index.vue';

export const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHistory('fe'),
    routes,
});

export default router;
