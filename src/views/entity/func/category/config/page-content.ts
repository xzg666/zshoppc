import i18n from "@/i18n";
const { t } = i18n.global;




export const contentTableConfig = {
    url: 'good',
    propList: [
        {
            prop: 'name',
            label: '商品名称',
            minWidth: '120'
        },
        {
            prop: 'img',
            label: '图片',
            minWidth: '100',
            slotName: 'img'
        },
        {
            prop: 'price',
            label: '价格',
            minWidth: '120',
            slotName: 'price'
        },
        {
            prop: 'tag',
            label: '标签',
            minWidth: '120',
            slotName: 'tag'
        },
        { prop: 'desc', label: '描述', minWidth: '200' },
        {
            prop: 'updateTime',
            label: '更新时间',
            minWidth: '120',
            slotName: 'updateTime'
        },
        {
            label: '操作',
            minWidth: '120',
            slotName: 'handler'
        }
    ],
    showSelectColumn: true,
    showIndexColumn: true,
    showFooter: true
}