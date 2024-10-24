import WgtText from './index.vue'

export default {
    name: 'WgtContent',
    wgtName: '内容',
    wgtIcon: 'wgt-store',
    setting: [
        { label: '内容', key: 'content', component: 'input', value: '双十一大促大洼大洼打回我电话白尾海雕过哈给我很多' },
        { label: '颜色', key: 'color', component: 'color', value: '#000' },
        // { label: '副标题', key: 'subtitle', component: 'input', value: '分享有好礼，拼单更便宜' },
    ],
    component: WgtText,
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
