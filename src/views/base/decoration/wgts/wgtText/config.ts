import WgtCom from './index.vue'

export default {
    name: 'WgtText',
    wgtName: '标题',
    wgtIcon: 'wgt-film',
    setting: [
        { label: '标题', key: 'title', component: 'input', value: '分享拼单' },
        { label: '标题文字颜色', key: 'titleColor', component: 'color', value: '#000' },
        { label: '副标题', key: 'subtitle', component: 'input', value: '分享有好礼，拼单更便宜' },
        { label: '副标题文字颜色', key: 'subtitleColor', component: 'color', value: '#666' },
        { label: '内容', key: 'content', component: 'textarea', value: '双十一大促大洼大洼打回我电话白尾海雕过哈给我很多' },
        { label: '颜色', key: 'contentColor', component: 'color', value: '#000' },
        { label: '组件间距', key: 'space', component: 'switch', value: false }
    ],
    component: WgtCom,
    transformIn: (v) => {
        // const { name, base, config, data } = v
        // return {
        //     name,
        //     ...base,
        //     ...config,
        //     data
        // }
    },
    transformOut: (v) => {
        // return pickBy(v, {
        //     name: 'name',
        //     base: (v) => {
        //         return pickBy(v, {
        //             title: 'title',
        //             subtitle: 'subtitle',
        //             padded: 'padded'
        //         })
        //     },
        //     config: (v) => {
        //         return pickBy(v, {
        //             interval: 'interval',
        //             dot: 'dot',
        //             dotLocation: 'dotLocation',
        //             dotColor: 'dotColor',
        //             shape: 'shape',
        //             dotCover: 'dotCover',
        //             rounded: 'rounded',
        //             content: 'content'
        //         })
        //     },
        //     data: 'data'
        // })
    }
}
