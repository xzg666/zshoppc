
type IFormType = 'input' | 'password' | 'select' | 'datepicker' | 'input-number'
export interface IFormItem {
    field: string
    type?: IFormType
    label: string
    rules?: any[]
    placeholder: string
    multiple?: Boolean
    required?: Boolean
    message?: string
    validator?: any
    // (rule, value, callback) => {
    //     console.log('value:', value)
    //     if (!this.form.is_self_delivery && this.dadaEnable && value.is_dada) {
    //       if (!value) {
    //         callback(new Error('业务类型必填'))
    //       } else {
    //         callback()
    //       }
    //     } else {
    //       callback()
    //     }
    //   }
    fixed?: string
    // 对于select
    options?: any[]
    component?: any
    componentProps?: any
    // 其他
    otherOptions?: any

}

export interface IForm {
    formItems: IFormItem[]
    labelWidth?: string
    itemStyle?: Object
    colLayout?: Object
    showSelectColumn?: Boolean
    showIndexColumn?: Boolean

}


