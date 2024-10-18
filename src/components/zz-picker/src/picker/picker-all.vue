<template>
  <div>
    <el-tabs tab-position="left" v-model="tabValue">
      <el-tab-pane label="商品" name="goods"
        ><PickerGoods v-if="tabValue == 'goods'" :value="value"
      /></el-tab-pane>
      <el-tab-pane label="路由" name="router"
        ><PickerRouter v-if="tabValue == 'router'" :value="value"
      /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import PickerGoods from './picker-goods.vue'
import PickerRouter from './picker-router.vue'
import { defineAsyncComponent, defineProps, ref } from 'vue'
import i18n from '@/i18n'

import { usePageSearch } from '@/hooks'
import dayjs from 'dayjs'
const { t } = i18n.global

const props = defineProps({
  value: {
    type: Object,
    default: () => ({})
  }
})

const tabValue = ref('goods')
</script>

<style scoped></style>
