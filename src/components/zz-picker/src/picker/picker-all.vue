<template>
  <div>
    <el-tabs tab-position="left" v-model="tabValue">
      <el-tab-pane label="商品" name="goods"
        ><PickerGoods
          v-if="tabValue == 'goods'"
          ref="pickerGoods"
          :value="value"
          @select="handleSelect"
      /></el-tab-pane>
      <el-tab-pane label="路由" name="router"
        ><PickerRouter
          v-if="tabValue == 'router'"
          ref="pickerRouter"
          :value="value"
          @select="handleSelect"
      /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import PickerGoods from './picker-goods.vue'
import PickerRouter from './picker-router.vue'
import { defineProps, onMounted, ref } from 'vue'
import i18n from '@/i18n'

const props = defineProps({
  value: {
    type: Object,
    default: () => ({})
  }
})

const tabValue = ref('goods')

onMounted(() => {
  tabValue.value = props.value.linkPage
})

const emit = defineEmits(['select'])

const handleSelect = (val: any) => {
  emit('select', val)
}

const pickerGoods = ref()
const pickerRouter = ref()
const getVal = () => {
  let curRef = null
  switch (tabValue.value) {
    case 'goods':
      curRef = pickerGoods
      break
    case 'router':
      curRef = pickerRouter
      break

    default:
      break
  }
  return {
    linkPage: tabValue.value,
    data: curRef?.value?.getVal()
  }
}

defineExpose({
  getVal
})
</script>

<style scoped></style>
