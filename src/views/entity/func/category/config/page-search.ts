import i18n from "@/i18n";
const { t } = i18n.global;

import { IForm } from '@/base-ui/form/type'


export const searchFormConfig: IForm = {
    formItems: [
        {
            field: 'id',
            type: 'input',
            label: 'id',
            placeholder: t('config.page-search.262573-0')
        },
        {
            field: 'name',
            type: 'input',
            label: t('config.page-search.262573-1'),
            placeholder: t('config.page-search.262573-2')
        },
        {
            field: 'password',
            type: 'password',
            label: t('config.page-search.262573-3'),
            placeholder: t('config.page-search.262573-4')
        },
        {
            field: 'sport',
            type: 'select',
            label: t('config.page-search.262573-5'),
            placeholder: t('config.page-search.262573-6'),
            options: [
                { label: t('config.page-search.262573-7'), value: 'basetball' },
                { label: t('config.page-search.262573-8'), value: 'baseball' }
            ]
        },
        {
            field: 'createTime',
            type: 'datepicker',
            label: t('config.page-search.262573-9'),
            placeholder: t('config.page-search.262573-6'),
            otherOptions: {
                startPlaceholder: t('config.page-search.262573-10'),
                endPlaceholder: t('config.page-search.262573-11'),
                type: 'daterange'
            }
        }
    ],
}