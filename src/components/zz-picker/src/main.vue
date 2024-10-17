<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="选择商品"
      width="1200"
      :before-close="handleClose"
    >
      <PickerType
        v-if="dialogVisible"
        ref="pickeRef"
        :value="value"
        :type="type"
      />
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleClose">Cancel</el-button>
          <el-button type="primary" @click="handleConfirm"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, defineEmits, defineExpose } from 'vue'
import PickerType from './picker-type.vue'
import 'element-plus/dist/index.css'
const props = defineProps({
  value: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: ''
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

const pickeRef = ref()

const emit = defineEmits(['confirm', 'close'])

const handleClose = () => {
  dialogVisible.value = false
  emit('close')
}
console.log(66, pickeRef.value)
const handleConfirm = () => {
  console.log(pickeRef?.value.getVal())
  dialogVisible.value = false
  emit('confirm', pickeRef?.value?.getVal())
}
</script>

<style scoped></style>
