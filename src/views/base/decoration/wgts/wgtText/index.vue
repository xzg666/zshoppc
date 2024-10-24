<style lang="less" src="./index.less"></style>
<template>
  <div class="wgt-text">
    <div :style="{ color: value.titleColor }">{{ value.title }}</div>
    <div :style="{ color: value.subtitleColor }">{{ value.subtitle }}</div>
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
