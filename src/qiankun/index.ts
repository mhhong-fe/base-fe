import { start as qiankunStart, registerMicroApps } from 'qiankun';

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
    qiankunStart({ prefetch: false });
}
