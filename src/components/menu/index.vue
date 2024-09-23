<template>
    <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        :default-openeds="openMenuList"
        @select="handleSelect"
    >
        <el-sub-menu v-for="item in menuList" :key="item.path" :index="item.path">
            <template #title>
                {{ item.title }}
            </template>
            <el-menu-item v-for="menu in item.children" :key="menu.path" :index="menu.path">
                {{ menu.title }}
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const emit = defineEmits<{
    select: [index: string];
}>();
const router = useRouter();
const menuList = [
    {
        title: '主应用',
        path: '/',
        children: [
            { path: '/home', title: '主页' },
            { path: '/about', title: '关于' },
        ],
    },
    {
        title: '结算管理',
        path: '/settle',
        children: [
            { path: '/settle/bill', title: '结算' },
            { path: '/settle/order', title: '订单' },
        ],
    },
    {
        title: '广告管理',
        path: '/ad',
        children: [
            { path: '/ad/plan', title: '计划' },
            { path: '/ad/channel', title: '渠道' },
        ],
    },
];

const openMenuList = menuList.map(item => item.path);
const activeMenu = ref();

function handleSelect(index: string) {
    activeMenu.value = index;
    router.push(index);
    emit('select', index);
}

onMounted(() => {
    const path = location.pathname.replace('/fe', '');
    menuList.forEach((item) => {
        item.children.forEach((route) => {
            if (route.path === path) {
                activeMenu.value = route.path;
            }
        });
    });
    if (!activeMenu.value) {
        activeMenu.value = menuList[0].children[0].path;
    }
});
</script>

<style scoped>

</style>
