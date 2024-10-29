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
      <div class="good-content-lg">
        <div v-for="(item, idx) in leftGoods" :key="idx" class="content-item">
          <ZzImage :src="item.img" class="content-item-img" />
          <div class="content-item-content">
            <div class="content-item-content-item">{{ item.name }}</div>
            <div class="content-item-content-price" v-if="item.price">
              ¥{{ (item.price / 100).toFixed(2) }}
            </div>
            <div class="content-item-content-mprice" v-if="item.market_price">
              ¥{{ (item.market_price / 100).toFixed(2) }}
            </div>
          </div>
        </div>
      </div>
      <div class="good-content-rg">
        <div v-for="(item, idx) in rightGoods" :key="idx" class="content-item">
          <ZzImage :src="item.img" class="content-item-img" />
          <div class="content-item-content">
            <div class="content-item-content-item">{{ item.name }}</div>
            <div class="content-item-content-price" v-if="item.price">
              ¥{{ (item.price / 100).toFixed(2) }}
            </div>
            <div class="content-item-content-mprice" v-if="item.market_price">
              ¥{{ (item.market_price / 100).toFixed(2) }}
            </div>
          </div>
        </div>
      </div>
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

const leftGoods = computed(() => {
  return props.value.goods.filter((item, idx) => idx % 2 == 0)
})
const rightGoods = computed(() => {
  return props.value.goods.filter((item, idx) => idx % 2 == 1)
})
</script>
