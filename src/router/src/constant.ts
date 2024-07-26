import IndexView from '@/views/index.vue'
export default
    [
        {
            path: '/',
            name: 'main',
            component: IndexView
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index.vue')
        }
    ]
