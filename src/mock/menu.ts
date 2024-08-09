export const menuList = [
    { name: '概括', url: '/dashbord', updateTime: 1723020707, id: 1 },
    {
        name: '商品', url: '/entity', updateTime: 1723020707, id: 2, children: [
            { name: '商品列表', url: '/entity/good', updateTime: 1723020707, id: 3 },
            {
                name: '功能', url: '/entity/func', updateTime: 1723020707, id: 4, children: [
                    { name: '分类', url: '/entity/func/category', updateTime: 1723020707, id: 5 },
                    { name: '标签', url: '/entity/func/tag', updateTime: 1723020707, id: 6 }
                ]
            }
        ]
    },
    {
        name: '装修', url: '/wxapp', updateTime: 1723020707, id: 7, children: [
            { name: '首页模板', url: '/wxapp/template', updateTime: 1723020707, id: 8 },
            { name: '自定义页面', url: '/wxapp/custompage', updateTime: 1723020707, id: 9, }
        ]
    }
]