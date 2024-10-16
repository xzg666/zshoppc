<template>
  <div>
    <ElDialog
      v-model="dialogVisible"
      title="选择商品"
      width="1200"
      :before-close="handleClose"
    >
      <PickerType ref="picker" :value="value" type="PickerRouter" />
      <template #footer>
        <div class="dialog-footer">
          <ElButton @click="handleClose">Cancel</ElButton>
          <ElButton type="primary" @click="handleConfirm"> Confirm </ElButton>
        </div>
      </template>
    </ElDialog>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, defineExpose } from 'vue'
import PickerType from './picker-type.vue'
import { ElDialog, ElButton } from 'element-plus'
import 'element-plus/dist/index.css'
const props = defineProps({
  value: {
    type: Object,
    default: () => ({})
  },
  isVisible: {
    type: Boolean,
    default: false
  }
})

const dialogVisible = ref(false)

watch(
  () => props.isVisible,
  (newval) => {
    console.log(7, newval)
    dialogVisible.value = newval
  }
)

const handleClose = () => {
  dialogVisible.value = false
}

const handleConfirm = () => {
  dialogVisible.value = false
}

defineExpose({ dialogVisible })
</script>

<style scoped></style>
