<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    width="1200"
    :before-close="handleClose"
  >
    <PickerType
      v-if="dialogVisible"
      ref="pickeRef"
      :value="value"
      :type="type"
      @select="handleSelect"
    />
    <template #footer>
      <div class="footer-box">
        <div class="select-txt">当前选择 {{ selectNum }} 条</div>
        <div class="dialog-footer">
          <el-button @click="handleClose">Cancel</el-button>
          <el-button type="primary" @click="handleConfirm"> Confirm </el-button>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import {
  defineProps,
  ref,
  watch,
  defineEmits,
  defineExpose,
  computed,
  onMounted,
  onUpdated
} from 'vue'
import PickerType from './picker-type.vue'

const props = defineProps({
  value: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String
  },
  type: {
    type: String,
    default: ''
  },
  isVisible: {
    type: Boolean,
    default: false
  },
  close: {
    type: Function
  },
  confirm: {
    type: Function
  }
})

const dialogVisible = ref(true)

watch(
  () => props.isVisible,
  (newval) => {
    console.log(7, newval)
    dialogVisible.value = newval
  }
)

const pickeRef = ref()

const emit = defineEmits(['confirm', 'close'])

const handleClose = () => {
  dialogVisible.value = false
  // emit('close')
  props.close?.()
}
console.log(66, pickeRef.value)

const handleConfirm = () => {
  // console.log(pickeRef?.value.getVal())
  dialogVisible.value = false
  // emit('confirm', pickeRef?.value?.getVal())
  props.confirm?.(pickeRef?.value?.getVal())
}

const selectNum = ref(0)

// const selecDatNum = computed(() => pickeRef?.value?.getSelecData())
</script>

<style scoped lang="less">
.footer-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .select-txt {
    font-size: 14px;
    color: #999;
  }
}
</style>
