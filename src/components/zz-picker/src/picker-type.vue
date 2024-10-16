<template>
  <div>
    <component :is="resolvePicker(type)" />
  </div>
</template>

<script setup lang="ts">
import { PickerGoods, PickerRouter } from './picker'
import { defineProps, ref, watch } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  isVisible: {
    type: Boolean,
    default: false
  }
})

const resolvePicker = (type: string) => {
  switch (type) {
    case 'pickerGoods':
      return PickerGoods
    case 'PickerRouter':
      return PickerRouter
    default:
      throw new Error(`picker: ${type} not registered`)
    // break
  }
}
</script>

<style scoped></style>
