<template>
  <div class="zz-image">
    <el-image :src="src" :style="styleObj">
      <template #error>
        <img :src="dImage" width="100%" />
      </template>
    </el-image>
  </div>
</template>

<script setup lang="ts">
import dImage from '@/assets/imgs/default.jpg'
import { ref, watch, defineEmits, computed } from 'vue'
const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  circle: {
    type: Boolean,
    dafault: false
  },
  width: {
    type: String,
    dafault: '100%'
  },
  height: {
    type: String,
    dafault: '100%'
  },
  fit: {
    type: String,
    default: 'cover'
  }
})

const styleObj = computed(() => {
  const _obj: any = {}
  props.circle && (_obj['border-radius'] = '50%')
  props.width && (_obj['width'] = props.width)
  props.height && (_obj['height'] = props.height)
  return _obj
})
</script>
<script lang="ts">
export default {
  name: 'ZzImage' // 组件的名字
}
</script>

<style lang="less" scoped></style>
