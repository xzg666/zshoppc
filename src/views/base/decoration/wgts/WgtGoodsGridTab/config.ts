import WgtText from './index.vue'
import goodsAttr from './goods-attr.vue'
import { defineAsyncComponent, defineComponent } from 'vue'

export default {
    name: 'WgtGoodsGridTab',
    wgtName: '商品Tab',
    wgtIcon: 'wgt-store',
    setting: [
        { label: '标题', key: 'title', component: 'input', value: '分享拼单' },
        { label: '标题', key: 'titleColor', component: 'color', value: '#000' },
        { label: '副标题', key: 'subtitle', component: 'input', value: '分享有好礼，拼单更便宜' },
        { label: '副标题', key: 'subtitleColor', component: 'color', value: '#666' },
        { label: '组件间距', key: 'space', component: 'switch', value: false },
        {
            label: '商品', key: 'goods', component: defineAsyncComponent(() => import('./goods-attr.vue')), value: [
                {
                    img: '',
                    linkPage: '',
                    content: '',
                    title: '商品名称',
                    id: '',
                    price: 0,
                    market_price: 0
                },
                {
                    img: '',
                    linkPage: '',
                    content: '',
                    title: '商品名称',
                    id: '',
                    price: 0,
                    market_price: 0
                },
                {
                    img: '',
                    linkPage: '',
                    content: '',
                    title: '商品名称',
                    id: '',
                    price: 0,
                    market_price: 0
                },
            ]
        },
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
