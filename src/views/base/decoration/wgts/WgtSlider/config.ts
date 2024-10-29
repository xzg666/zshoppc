import WgtCom from './index.vue'
import goodsAttr from './item-attr.vue'
import { defineAsyncComponent, defineComponent } from 'vue'

export default {
    name: 'WgtSlider',
    wgtName: '轮播',
    wgtIcon: 'wgt-slider',
    setting: [
        { label: '标题', key: 'title', component: 'input', value: '分享拼单' },
        { label: '标题文字颜色', key: 'titleColor', component: 'color', value: '#000' },
        { label: '副标题', key: 'subtitle', component: 'input', value: '分享有好礼，拼单更便宜' },
        { label: '副标题文字颜色', key: 'subtitleColor', component: 'color', value: '#666' },
        { label: '组件间距', key: 'space', component: 'switch', value: false },
        {
            label: '轮播项', key: 'pics', component: defineAsyncComponent(() => import('./item-attr.vue')), value: [
                {
                    img: ''
                }
            ]
        },
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