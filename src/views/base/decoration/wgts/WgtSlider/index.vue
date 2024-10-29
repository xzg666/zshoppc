<style lang="less" scoped src="./index.less"></style>
<template>
  <div :class="['wgt-slider', { space: value.space }]">
    <div class="slider-head">
      <div class="slider-head-title" :style="{ color: value.titleColor }">
        {{ value.title }}
      </div>
      <div class="slider-head-subtitle" :style="{ color: value.subtitleColor }">
        {{ value.subtitle }}
      </div>
    </div>

    <div class="slider-content">
      <el-carousel trigger="click">
        <el-carousel-item
          v-for="item in value.pics"
          :key="item"
          class="content-item"
        >
          <ZzImage :src="item.img" class="content-item-img" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ZzImage from '@/components/zz-image'

const props = defineProps({
  value: {
    type: Object,
    required: true
  }
})
</script>
