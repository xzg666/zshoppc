import IndexView from '@/views/index.vue'
export default {
    path: '/dashbord',
    component: IndexView,
    children: [
        {
            path: '',
            name: 'dashbord',
            component: () => import('@/views/dashbord/index.vue')
        }
    ]
}