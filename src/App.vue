<template>
    <div :class="$style.container">
        <header :class="$style.header">
            <h1>微前端Demo</h1>
        </header>
        <div :class="$style.section">
            <div>
                <Menu :class="$style.menu" @select="handleSelect" />
            </div>
            <div>
                <div
                    id="container" :class="{
                        hiddenMicro: !isMicroRoute,
                    }"
                />
                <RouterView v-if="!isMicroRoute" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import start, { apps } from './qiankun';
// import router from './router';

const isMicroRoute = ref(false);

// 点击菜单时，判断是否为子应用
// 第一个路由匹配上，/fe/settle/order，settle匹配上就证明是子应用
function handleSelect(index: string) {
    isMicroRoute.value = !!apps.find((item) => {
        const microRoute = item.activeRule[0].split('/')[2];
        const firstRoute = index.split('/')[1];
        return microRoute === firstRoute;
    });
}

// 页面刷新时，判断是否为子应用
onMounted(() => {
    const path = location.pathname.split('/')[2];
    isMicroRoute.value = !!apps.find((item) => {
        const microRoute = item.activeRule[0].split('/')[2];
        return microRoute === path;
    });
});

start();
</script>

<style module lang="scss">
.container {
    width: 100vw;
    height: 100vh;
}

.header {
    width: 100%;
    height: 80px;
    border-bottom: 2px solid #e2e2e2;
    display: flex;

    justify-content: center;
    align-items: center;
}

.section {
    width: 100%;
    display: flex;
    height: calc(100% - 80px);
}

.menu {
    width: 200px;
    height: 100%;
}

.hiddenMicro {
    width: 0;
    height: 0;
    overflow: hidden;
}
</style>
