<template>
  <div>
    <ZzTable
      :listData="dataList"
      :listCount="listCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      :loading="loading"
      @selectionChange="selectionChange"
    >
      <template #updateTime="scope">
        {{ $filters.formatTime(scope.row.updateTime * 1000) }}
      </template>

      <template
        v-for="item in otherPropSlot"
        :key="item.slotName"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </ZzTable>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue'
import ZzTable from '@/base-ui/table/index'
import axios from 'axios'

const props = defineProps({
  contentTableConfig: {
    type: Object,
    default: () => ({})
  }
})

const pageInfo = ref({ page_size: 10, page_no: 1 })
const listCount = ref(0)
const loading = ref(false)

watch(
  pageInfo,
  (newValue) => {
    console.log('newValue', newValue)

    getDataList()
  },
  {
    deep: true
  }
)

const dataList = ref([])

const getDataList = (queryInfo: any = {}) => {
  const { page_size, page_no } = pageInfo.value
  const data = { page_size, page_no, ...queryInfo }
  console.log('列表请求参数', data)
  loading.value = true
  axios
    .get(`/mockapi/${props.contentTableConfig.url}`, {
      data: { page_size, page_no }
    })
    .then((response) => {
      console.log(response.data)
      dataList.value = response.data.list
      listCount.value = response.data.total
    })
    .finally(() => {
      loading.value = false
    })
}

getDataList()
defineExpose({ getDataList })

const otherPropSlot = props?.contentTableConfig?.propList.filter(
  (item: any) => {
    return !['updateTime'].includes(item.slotName)
  }
)
const emit = defineEmits(['selectionChange'])

const selectionChange = (val: any) => {
  emit('selectionChange', val)
}
</script>

<style scoped>
.item-img {
  width: 90px;
  height: 90px;
}
</style>
