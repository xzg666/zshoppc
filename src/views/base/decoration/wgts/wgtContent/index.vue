<style lang="less" src="./index.less"></style>
<template>
  <div class="wgt-content">
    <div :style="{ color: value.color }">{{ value.content }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: Object,
    required: true
  }
})
</script>
