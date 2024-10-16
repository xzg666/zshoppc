<template>
  <div>
    <pageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @selectionChange="selectionChange"
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
import { defineAsyncComponent, defineProps } from 'vue'
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

const contentTableConfig = {
  url: 'menu',
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
    treeProp: { children: 'children' }
  }
}
</script>

<style scoped></style>
