<template>
  <div>
    <pageSearch
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="queryBtnClick"
      @resetBtnClick="resetBtnClick"
    ></pageSearch>
    <pageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @selectionChange="selectionChange"
      @afterFetch="afterFetch"
    >
      <template #price="scope">
        {{ '¥' + (scope.row.price / 100).toFixed(2) }}
      </template>
      <template #img="scope">
        <el-image
          class="item-img"
          :src="scope.row.img"
          :preview-src-list="[scope.row.img]"
          preview-teleported
        />
      </template>
      <template #tag="scope">
        <div>
          <el-tag
            v-for="tag in scope.row.tag"
            :key="tag.id"
            :type="tag.bcColor"
            >{{ tag.name }}</el-tag
          >
        </div>
      </template>
    </pageContent>
  </div>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content'
import pageSearch from '@/components/page-search'
import {
  defineAsyncComponent,
  defineProps,
  ref,
  defineExpose,
  onMounted,
  nextTick,
  onUpdated,
  defineEmits
} from 'vue'
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

const emit = defineEmits(['select'])
const selecData = ref([])

const selectionChange = (val) => {
  console.log(val)
  selecData.value = val
  emit('select', selecData.value)
}

const getVal = () => {
  return selecData.value
}

defineExpose({
  getVal
})

const [pageContentRef, queryBtnClick, resetBtnClick] = usePageSearch(
  //搜索参数处理
  (query) => {
    const { createTime } = query
    return {
      ...query,
      createTime: [
        dayjs(createTime[0]).valueOf() / 1000,
        dayjs(createTime[1]).valueOf() / 1000
      ]
    }
  }
)

const afterFetch = (val) => {
  //回显勾选
  handleCheckDefault(val)
}

const tableData = ref([])

const handleCheckDefault = (list) => {
  tableData.value = list
  const ids = props.value.ids
  const tableRef = pageContentRef?.value?.getTabRef()
  console.log('picker-good2', list)
  nextTick(() => {
    list.forEach((item) => {
      if (ids.includes(item.id)) {
        tableRef?.toggleRowSelection(item, true)
      }
    })
  })
}

const contentTableConfig = {
  url: 'good',
  propList: [
    {
      prop: 'name',
      label: t('config.page-content.711952-0'),
      minWidth: '120'
    },
    {
      prop: 'img',
      label: t('config.page-content.711952-1'),
      minWidth: '100',
      slotName: 'img'
    },
    {
      prop: 'price',
      label: t('config.page-content.711952-2'),
      minWidth: '120',
      slotName: 'price'
    },
    {
      prop: 'tag',
      label: t('config.page-content.711952-3'),
      minWidth: '120',
      slotName: 'tag'
    },
    {
      prop: 'desc',
      label: t('config.page-content.711952-4'),
      minWidth: '200',
      tooltip: true
    },
    {
      prop: 'desc',
      label: t('config.page-content.711952-4'),
      minWidth: '200',
      tooltip: true
    },
    {
      prop: 'desc',
      label: t('config.page-content.711952-4'),
      minWidth: '200',
      tooltip: true
    },
    {
      prop: 'desc',
      label: t('config.page-content.711952-4'),
      minWidth: '200',
      tooltip: true
    },
    {
      prop: 'desc',
      label: t('config.page-content.711952-4'),
      minWidth: '200',
      tooltip: true
    },
    {
      prop: 'updateTime',
      label: t('config.page-content.711952-5'),
      minWidth: '120',
      slotName: 'updateTime'
    }
  ],
  showSelectColumn: true,
  showIndexColumn: true,
  showFooter: true,
  childrenProps: {
    height: '650' //固定高
  }
}

const searchFormConfig = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: t('config.page-search.262573-0')
    },
    {
      field: 'name',
      type: 'input',
      label: t('config.page-search.262573-1'),
      placeholder: t('config.page-search.262573-2')
    },
    {
      field: 'password',
      type: 'password',
      label: t('config.page-search.262573-3'),
      placeholder: t('config.page-search.262573-4')
    },
    {
      field: 'sport',
      type: 'select',
      label: t('config.page-search.262573-5'),
      placeholder: t('config.page-search.262573-6'),
      options: [
        { label: t('config.page-search.262573-7'), value: 'basetball' },
        { label: t('config.page-search.262573-8'), value: 'baseball' }
      ]
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: t('config.page-search.262573-9'),
      placeholder: t('config.page-search.262573-6'),
      otherOptions: {
        startPlaceholder: t('config.page-search.262573-10'),
        endPlaceholder: t('config.page-search.262573-11'),
        type: 'daterange'
      }
    },
    {
      field: 'rate',
      label: t('config.page-search.262573-9'),
      placeholder: t('config.page-search.262573-6'),
      component: defineAsyncComponent(() => import('@/components/zz-rate')),
      componentProps: {
        isHalf: true
      }
    }
  ]
}
</script>

<style scoped></style>
