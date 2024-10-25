<style lang="less" scoped src="./index.less"></style>
<template>
  <div :class="['wgt-text', { space: value.space }]">
    <div class="text-head">
      <div class="text-head-title" :style="{ color: value.titleColor }">
        {{ value.title }}
      </div>
      <div class="text-head-subtitle" :style="{ color: value.subtitleColor }">
        {{ value.subtitle }}
      </div>
    </div>

    <div class="text-content" :style="{ color: value.contentColor }">
      {{ value.content }}
    </div>
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
