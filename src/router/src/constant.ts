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
        },
        {
            path: '/wxapp/manage/decorate',
            name: 'decorate',
            component: () => import('@/views/base/decoration/index.vue')
        },

    ]
