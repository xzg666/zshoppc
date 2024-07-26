import IndexView from '@/views/index.vue'
export default {
    path: '/entity',
    component: IndexView,
    children: [
        {
            path: 'good',
            name: '商品列表',
            component: () => import('@/views/entity/good/index.vue')
        },
        {
            path: 'func/category',
            name: '分类',
            component: () => import('@/views/entity/func/category.vue')
        },
        {
            path: 'func/tag',
            name: '标签',
            component: () => import('@/views/entity/func/tag.vue')
        }
    ]
}