
import IndexView from '@/views/index.vue'
export default {
    path: '/wxapp',
    component: IndexView,
    children: [
        {
            path: 'template',
            name: '首页模板',
            component: () => import('@/views/wxapp/template/index.vue'),
            // children: [
            //     {
            //         path: 'editor',
            //         component: () => import('@/views/base/decoration/index.vue')
            //     },
            // ]
        },
        {
            path: 'custompage',
            name: '自定义页面',
            component: () => import('@/views/wxapp/custompage/index.vue')
        }
    ]
}