<style lang="less" scoped src="./index.less"></style>
<template>
  <div :class="['wgt-good', { space: value.space }]">
    <div class="good-head">
      <div class="good-head-title" :style="{ color: value.titleColor }">
        {{ value.title }}
      </div>
      <div class="good-head-subtitle" :style="{ color: value.subtitleColor }">
        {{ value.subtitle }}
      </div>
    </div>

    <div class="good-content">
      <div v-for="(item, idx) in value.goods" :key="idx">
        <el-image :src="item.img" mode="scaleToFill" />
        <div>
          <div>{{ item.title }}</div>
          <div>
            <div>{{ item.price }}</div>
            <div>{{ item.market_price }}</div>
          </div>
        </div>
      </div>
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
