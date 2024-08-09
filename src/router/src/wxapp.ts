
import IndexView from '@/views/index.vue'
export default {
    path: '/wxapp',
    component: IndexView,
    children: [
        {
            path: 'template',
            name: '首页模板',
            component: () => import('@/views/wxapp/template/index.vue')
        },
        {
            path: 'custompage',
            name: '自定义页面',
            component: () => import('@/views/wxapp/custompage/index.vue')
        }
    ]
}