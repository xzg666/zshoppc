<template>
  <div class="zz-rate">
    <el-rate v-model="value" :allow-half="isHalf" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue'
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  isHalf: {
    type: Boolean,
    dafault: false
  }
})

const value = ref(props.modelValue)
const emit = defineEmits(['update:modelValue'])

watch(
  () => value.value,
  (newValue) => {
    emit('update:modelValue', newValue)
  }
)
</script>
<script lang="ts">
export default {
  name: 'ZzRate' // 组件的名字
}
</script>

<style lang="less" scoped></style>
