<template>
  <div>
    <zz-form v-bind="pageFormConfig" v-model="formData" ref="formRef">
      <template #header="scope">
        <div class="header-box">
          <slot name="header" :row="scope.row"></slot>
        </div>
      </template>
      <template #footer="scope">
        <div class="footer-box">
          <slot name="footer" :row="scope.row"></slot>
        </div>
      </template>
    </zz-form>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  defineProps,
  defineEmits,
  onMounted,
  onUnmounted,
  watch,
  defineExpose
} from 'vue'
import ZzForm from '@/base-ui/form/index'

const props = defineProps({
  pageFormConfig: {
    type: Object,
    default: () => ({})
  },
  defaultModalVal: {
    type: Object,
    default: () => ({})
  }
})
//formData的值不是写死的而是使用者传配置动态生成的
//双向绑定的属性应该是由配置文件的field来决定
const formItems = props.pageFormConfig?.formItems ?? []
const formOriginData: any = {}
formItems.forEach((item: any) => {
  if (item.field) {
    formOriginData[item.field] = ''
  }
})
const formData = ref(formOriginData)

//数据回显
watch(
  () => props.defaultModalVal,
  (newval) => {
    console.log('new', newval, props.pageFormConfig.formItems)
    props.pageFormConfig.formItems.forEach((item: any) => {
      if (item.field) {
        formData.value[item.field] = newval[item.field]
      }
    })
  }
)

const formRef = ref()

const validate = () => {
  return formRef.value && formRef.value.validate()
}

defineExpose({
  validate,
  formData
})
</script>

<style lang="less" scoped>
/deep/.el-form-item__content {
  max-width: 320px;
}
.header-box {
  color: #606266;
  font-weight: 500;
  margin-bottom: 16px;
}
.footer-box {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
</style>
