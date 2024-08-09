<template>
  <div>
    <el-dialog
      :title="modalConfig.title"
      v-model="dialogVisible"
      width="30%"
      center
      destroy-on-close
    >
      <zz-form v-bind="modalConfig" v-model="formData" ref="formRef">
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="handleModalCancle">取消</el-button>
            <el-button type="primary" @click="handleModalConfirm"
              >确定</el-button
            >
          </div>
        </template>
      </zz-form>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue'
import ZzForm from '@/base-ui/form/index'

const props = defineProps({
  modalConfig: {
    type: Object,
    default: () => ({})
  },
  defaultModalVal: {
    type: Object,
    default: () => ({})
  }
})

const dialogVisible = ref(false)
defineExpose({
  dialogVisible
})

const formData = ref({})
const formRef = ref()

const handleModalCancle = () => {
  dialogVisible.value = false
  formRef.value.resetFields()
}

const emit = defineEmits(['confirm'])

const handleModalConfirm = () => {
  formRef.value.validate((res: any) => {
    if (res) {
      emit('confirm', { ...formData.value })
    }
  })
}

watch(
  () => props.defaultModalVal,
  (newval) => {
    console.log('new', newval, props.modalConfig.formItems)
    props.modalConfig.formItems.forEach((item: any) => {
      formData.value[item.field] = newval[item.field]
    })
  }
)
</script>

<style scoped>
.dialog-footer {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
