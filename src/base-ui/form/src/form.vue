<template>
  <div class="zz-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      :label-width="labelWidth"
    >
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :style="itemStyle"
              :prop="item.field"
              :key="item.field"
            >
              <template v-if="item.type == 'input' || item.type == 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type == 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-if="item.type == 'input-number'">
                <el-input-number
                  v-model="formData[`${item.field}`]"
                  v-bind="item.otherOptions"
                />
              </template>
              <template v-if="item.type == 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  multiple
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    :label="option.label"
                  ></el-option>
                </el-select>
              </template>
              <template v-if="item.type == 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer">footer</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, watch, defineEmits, nextTick } from 'vue'
import { IFormItem } from '@/base-ui/form/type/index'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  labelWidth: {
    type: String,
    default: '120'
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  itemStyle: {
    type: Object,
    default: () => ({})
  },
  //   动态布局
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, //>1920 一行四个
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})

let rules: any = {}
props.formItems.forEach((item) => {
  if (item.validator) {
    rules[item.field] = [{ required: true, validator: item.validator }]
  } else if (item.required) {
    rules[item.field] = [
      { required: true, message: item.message || '不能为空' }
    ]
  }
})

console.log('rule-------------', rules)

const formRef = ref()

const resetFields = () => {
  formRef.value && formRef.value.resetFields()
}
const validate = () => {
  formRef.value && formRef.value.validate()
}
defineExpose({ resetFields, validate })

const emit = defineEmits(['update:modelValue'])
const formData = ref({ ...props.modelValue })

watch(
  formData,
  (newValue) => {
    emit('update:modelValue', newValue)
  },
  {
    deep: true
  }
)
</script>

<style scoped></style>
