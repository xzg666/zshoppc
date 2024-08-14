<template>
  <div class="zz-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <el-form
        class="form"
        ref="formRef"
        :model="formData"
        :rules="rules"
        :label-width="labelWidth"
      >
        <el-row>
          <template v-for="item in formItems" :key="item.label">
            <el-col
              v-bind="
                item.display == 'block' || item.type == 'group'
                  ? { span: 24 }
                  : colLayout
              "
            >
              <div v-if="item.type == 'group'" class="form-group">
                {{ item.label }}
              </div>
              <el-form-item
                v-else
                :label="item.label"
                :style="itemStyle"
                :prop="item.field"
                :key="item.field"
              >
                <template v-if="item.type">
                  <template
                    v-if="item.type == 'input' || item.type == 'password'"
                  >
                    <el-input
                      :placeholder="item.placeholder"
                      :show-password="item.type == 'password'"
                      v-model="formData[`${item.field}`]"
                      clearable
                    />
                  </template>
                  <template v-if="item.type == 'input-number'">
                    <el-input-number
                      v-model="formData[`${item.field}`]"
                      v-bind="item.otherOptions"
                      clearable
                    />
                  </template>
                  <template v-if="item.type == 'select'">
                    <el-select
                      :placeholder="item.placeholder"
                      :multiple="item.multiple"
                      v-model="formData[`${item.field}`]"
                      clearable
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
                      clearable
                    ></el-date-picker>
                  </template>
                </template>
                <template v-else>
                  <!-- 动态组件 -->
                  <component
                    :is="item.component"
                    v-model="formData[`${item.field}`]"
                    v-bind="item.componentProps"
                  />
                </template>
              </el-form-item>
            </el-col>
          </template>
        </el-row>
      </el-form>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, watch, defineEmits } from 'vue'
import { IFormItem } from '@/base-ui/form/type/index'
import { COLLAYOUT } from '@/consts'

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
    default: () => COLLAYOUT
  }
})

let rules: any = {}
props.formItems.forEach((item) => {
  if (item.field) {
    if (item.validator) {
      rules[item.field] = [{ required: true, validator: item.validator }]
    } else if (item.required) {
      rules[item.field] = [
        { required: true, message: item.message || '不能为空' }
      ]
    }
  }
})

const formRef = ref()

const resetFields = () => {
  formRef.value && formRef.value.resetFields()
}

const validate = () => {
  return formRef.value && formRef.value.validate()
}

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

defineExpose({ resetFields, validate })
</script>

<style lang="less" scoped>
.content {
  /* display: flex; */
  width: 100%;
}
.shouqi {
  height: 50px;
  overflow: hidden;
}
.form {
  flex: 1;
}
.footer {
  min-width: 220px;
}
.form-group {
  &:before {
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 0;
    width: 2px;
    background-color: #298dff;
    content: '';
  }
  padding: 6px 0 6px 8px;
  color: #333;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  border-bottom: 1px solid #f1f2f5;
  margin-bottom: 16px;
}
</style>
