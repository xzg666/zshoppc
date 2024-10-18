<template>
  <div>
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
import { defineAsyncComponent, defineProps, nextTick, ref } from 'vue'
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

const afterFetch = (val) => {
  //回显勾选
  handleCheckDefault(val)
}

const tableData = ref([])

const [pageContentRef] = usePageSearch()

const handleCheckDefault = (list: any) => {
  tableData.value = list
  const ids = props.value.ids
  console.log('picker-router', list, ids)
  routerRecursionFunc(list, ids)
}

const routerRecursionFunc = (arr: any, targetArr: any) => {
  arr.forEach((item: any) => {
    if (targetArr.includes(item.id)) {
      console.log(item)
      nextTick(() => {
        pageContentRef?.value?.getTabRef()?.toggleRowSelection(item, true)
      })
    }
    if (item.children) {
      routerRecursionFunc(item.children, targetArr)
    }
  })
}

const contentTableConfig = {
  url: 'menu',
  showSelectColumn: true,
  propList: [
    {
      prop: 'name',
      label: '菜单名称',
      minWidth: '120'
    },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: '120'
    },
    {
      prop: 'updateTime',
      label: '更新时间',
      minWidth: '120',
      slotName: 'updateTime'
    }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: { children: 'children' },
    defaultExpandAll: true
  }
}
</script>

<style scoped></style>
