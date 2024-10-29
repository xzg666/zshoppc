<style lang="less" scoped>
.goods-attr {
  width: 100%;
}
</style>
<template>
  <div class="goods-attr">
    {{ modelValue }}
    <div v-for="(item, idx) in modelValue" :key="idx">
      <el-input v-model="item.img" style="max-width: 220px" />
    </div>
    <el-button @click="handleAdd" type="text">增加</el-button>
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

const emit = defineEmits(['update:modelValue'])

const handleAdd = () => {
  emit('update:modelValue', [...props.modelValue, [{ img: '' }]])
}

const instance = getCurrentInstance()
const picker = instance?.proxy?.$picker

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
