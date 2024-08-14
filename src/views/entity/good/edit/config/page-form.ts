import i18n from "@/i18n";
const { t } = i18n.global;
import { defineAsyncComponent } from 'vue'

import { IForm } from '@/base-ui/form/type'


export const pageFormConfig: IForm = {
    formItems: [
        {
            label: '基础配置',
            type: 'group'
        },
        {
            field: 'name',
            type: 'input',
            label: t('config.page-modal.269462-1'),
            placeholder: t('config.page-modal.269462-2'),
            required: true,
            message: t('config.page-modal.269462-3')
            // validator: (rule, value, callback) => {
            //     if (!value) {
            //         callback(new Error(t('config.page-modal.269462-3')))
            //     } else {
            //         callback()
            //     }
            // }
        },
        {
            field: 'name',
            type: 'input',
            label: t('config.page-modal.269462-1'),
            placeholder: t('config.page-modal.269462-2'),
            required: true,
            message: t('config.page-modal.269462-3')
        },
        {
            field: 'name',
            type: 'input',
            label: t('config.page-modal.269462-1'),
            placeholder: t('config.page-modal.269462-2'),
            required: true,
            message: t('config.page-modal.269462-3')
        },
        {
            field: 'name',
            type: 'input',
            label: t('config.page-modal.269462-1'),
            placeholder: t('config.page-modal.269462-2'),
            required: true,
            message: t('config.page-modal.269462-3')
        },
        {
            field: 'name',
            type: 'input',
            label: t('config.page-modal.269462-1'),
            placeholder: t('config.page-modal.269462-2'),
            required: true,
            message: t('config.page-modal.269462-3')
        },
        {
            field: 'name',
            type: 'input',
            label: t('config.page-modal.269462-1'),
            placeholder: t('config.page-modal.269462-2'),
            required: true,
            message: t('config.page-modal.269462-3')
        },
        {
            field: 'price',
            type: 'input-number',
            label: t('config.page-modal.269462-4'),
            placeholder: t('config.page-modal.269462-5'),
            otherOptions: {
                precision: "2",
                step: "0.1",
                min: "0"
            },
            validator: (rule, value, callback) => {
                if (!value) {
                    callback(new Error(t('config.page-modal.269462-6')))
                } else {
                    callback()
                }
            }
        },
        {
            field: 'name',
            type: 'input',
            label: t('config.page-modal.269462-1'),
            placeholder: t('config.page-modal.269462-2'),
            required: true,
            message: t('config.page-modal.269462-3')
        },
        {
            field: 'price',
            type: 'input-number',
            label: t('config.page-modal.269462-4'),
            placeholder: t('config.page-modal.269462-5'),
            otherOptions: {
                precision: "2",
                step: "0.1",
                min: "0"
            },
            validator: (rule, value, callback) => {
                if (!value) {
                    callback(new Error(t('config.page-modal.269462-6')))
                } else {
                    callback()
                }
            },
            display: 'block'
        },
        {
            field: 'tag',
            type: 'select',
            label: t('config.page-modal.269462-7'),
            placeholder: t('config.page-modal.269462-8'),
            multiple: true,
            options: [],
            display: 'block'
        },


    ],
}
