import { render } from "vue";


export const modalConfig = {
    title: '新增',
    formItems: [
        {
            field: 'name',
            type: 'input',
            label: '名称',
            placeholder: '请输入名称',
            required: true,
            message: '名称不能为空'
            // validator: (rule, value, callback) => {
            //     if (!value) {
            //         callback(new Error('名称不能为空'))
            //     } else {
            //         callback()
            //     }
            // }
        },
        {
            field: 'price',
            type: 'input-number',
            label: '价格',
            placeholder: '请输入价格',
            otherOptions: {
                precision: "2",
                step: "0.1",
                min: "0"
            },
            validator: (rule, value, callback) => {
                if (!value) {
                    callback(new Error('价格不能为空'))
                } else {
                    callback()
                }
            }
        },
        {
            field: 'tag',
            type: 'select',
            label: '选择标签',
            placeholder: '请选择标签',
            options: []
        },
    ],
    colLayout: { span: 24 },
}