import { start as qiankunStart, registerMicroApps } from 'qiankun';

const apps = [
    {
        name: 'settle-fe',
        entry: 'http://localhost:4000/settle/',
        container: '#container',
        activeRule: ['/fe/settle'],
    },
];

export default function start() {
    registerMicroApps(apps.map(app => ({
        ...app,
        props: {
            baseUrl: 'fe',
        },
    })));
    qiankunStart();
}
