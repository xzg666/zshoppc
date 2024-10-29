<template>
  <div>
    <el-dropdown split-button @click="handleClick" @command="handleCommand">
      {{ value > 0 ? getFormatValue() : placeholder }}
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="clear">清除</el-dropdown-item>
          <el-dropdown-item command="review">查看</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
const props = defineProps({
  value: {
    type: Number,
    required: true,
    default: 0
  },
  format: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click', 'clear', 'review'])

const handleClick = () => {
  emit('click')
}

const handleCommand = (val: any) => {
  emit(val)
}

const getFormatValue = () => {
  return props.format.replace(/\{0\}/, props.value + '')
}
</script>

<style lang="less" scoped></style>
