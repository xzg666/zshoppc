import i18n from "@/i18n";
const { t } = i18n.global;




export const contentTableConfig = {
    url: 'menu',
    propList: [
        {
            prop: 'name',
            label: '菜单名称',
            minWidth: '120'
        },
        {
            prop: 'url',
            label: '菜单url',
            minWidth: '120'
        },
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
    childrenProps: {
        rowKey: 'id',
        treeProp: { children: 'children' }
    }
}