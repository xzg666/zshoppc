import i18n from "@/i18n";
const { t } = i18n.global;

export const contentTableConfig = {
    url: 'good',
    propList: [
        {
            prop: 'name',
            label: t('config.page-content.711952-0'),
            minWidth: '120'
        },
        {
            prop: 'img',
            label: t('config.page-content.711952-1'),
            minWidth: '100',
            slotName: 'img'
        },
        {
            prop: 'price',
            label: t('config.page-content.711952-2'),
            minWidth: '120',
            slotName: 'price'
        },
        {
            prop: 'tag',
            label: t('config.page-content.711952-3'),
            minWidth: '120',
            slotName: 'tag'
        },
        { prop: 'desc', label: t('config.page-content.711952-4'), minWidth: '200', tooltip: true },
        { prop: 'desc', label: t('config.page-content.711952-4'), minWidth: '200', tooltip: true },
        { prop: 'desc', label: t('config.page-content.711952-4'), minWidth: '200', tooltip: true },
        { prop: 'desc', label: t('config.page-content.711952-4'), minWidth: '200', tooltip: true },
        { prop: 'desc', label: t('config.page-content.711952-4'), minWidth: '200', tooltip: true },
        {
            prop: 'updateTime',
            label: t('config.page-content.711952-5'),
            minWidth: '120',
            slotName: 'updateTime'
        },
        {
            label: t('config.page-content.711952-6'),
            minWidth: '220',
            slotName: 'handler',
            fixed: 'right'
        }
    ],
    showSelectColumn: true,
    showIndexColumn: true,
    showFooter: true,
    childrenProps: {
        height: '650',//固定高
    }
}