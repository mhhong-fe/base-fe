import { start as qiankunStart, registerMicroApps } from 'qiankun';

// fe用来标识这是一个前端应用，settle用来子应用
export const apps = [
    {
        name: 'settle-fe',
        entry: 'http://localhost:4000/settle/',
        container: '#container',
        activeRule: ['/fe/settle'],
    },
    {
        name: 'ad-fe',
        entry: 'http://localhost:4001/ad/',
        container: '#container',
        activeRule: ['/fe/ad'],
    },
];

export default function start() {
    registerMicroApps(apps.map(app => ({
        ...app,
        props: {
            baseUrl: 'fe',
        },
    })));
    // 不需要预加载
    qiankunStart({ prefetch: false });
}
