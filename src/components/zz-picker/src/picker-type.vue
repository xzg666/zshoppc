<template>
  <div>
    <component
      :is="resolvePicker(type)"
      :value="value"
      @select="handleSelect"
      ref="componentRef"
    />
  </div>
</template>

<script setup lang="ts">
import { PickerGoods, PickerRouter, PickerAll } from './picker'
import { defineProps, ref, watch, defineEmits } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  value: {
    type: Object,
    default: () => ({})
  },
  isVisible: {
    type: Boolean,
    default: false
  }
})

const componentRef = ref()

defineExpose({
  getVal: () => componentRef.value?.getVal()
})

const emit = defineEmits(['select'])

const handleSelect = (val) => {
  console.log(5555, val)

  emit('select', val)
}

const resolvePicker = (type: string) => {
  switch (type) {
    case 'goods':
      return PickerGoods
    case 'router':
      return PickerRouter
    case 'all':
      return PickerAll

    default:
      throw new Error(`picker: ${type} not registered`)
  }
}
</script>

<style scoped></style>
