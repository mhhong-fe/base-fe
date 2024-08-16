<template>
    <div class="w-100vw h-100vh">
        <h2>微前端Demo</h2>
        <RouterView v-if="isBaseRoute" />
        <div v-else id="container" class="bg-white rounded-5 h-100 overflow-auto" />
    </div>
</template>

<script setup lang="ts">
import start from './qiankun';
import { routes } from './router';

const path = window.location.pathname.split('/')[2];
const isBaseRoute = computed(() => routes.find(item => item.path === `/${path}`));
start();
</script>
