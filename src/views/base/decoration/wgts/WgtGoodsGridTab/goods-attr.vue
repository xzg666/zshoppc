<style lang="less" scoped src="./index.less"></style>
<template>
  <div class="goods-attr">
    {{ modelValue }}
    <CommonButton
      placeholder="选择商品"
      format="{0}件商品"
      :value="goodsCount"
      @click="handleClick"
      @clear="handleClear"
      @review="handelReview"
    />
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  defineProps,
  computed,
  getCurrentInstance,
  defineEmits
} from 'vue'
import CommonButton from '../../coms/commonButton.vue'

const props = defineProps({
  modelValue: {
    type: Array,
    required: true
  }
})

const goodsCount = computed(() => {
  return props.modelValue.filter((item) => !!item.id).length
})

const instance = getCurrentInstance()
const picker = instance?.proxy?.$picker

const emit = defineEmits(['update:modelValue'])

const handleClick = async () => {
  const res = await picker.goods({
    ids: props.modelValue.map((item) => item.id)
  })
  console.log(res)
  emit('update:modelValue', res)
}

const handleClear = () => {
  emit('update:modelValue', [])
}

const handelReview = () => {}
</script>
