<style lang="less" scoped src="./index.less"></style>
<template>
  <div class="goods-attr">
    {{ modelValue }}
    <div v-for="(item, idx) in modelValue" :key="idx">
      <el-input v-model="item.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})
</script>
