<template>
  <pageSearch
    :searchFormConfig="searchFormConfig"
    @queryBtnClick="queryBtnClick"
    @resetBtnClick="resetBtnClick"
  ></pageSearch>
  <div class="action-box">
    <el-button @click="handleAddClick">新增</el-button>
  </div>
  <pageContent ref="pageContentRef" :contentTableConfig="contentTableConfig">
    <template #price="scope">
      {{ '¥' + (scope.row.price / 100).toFixed(2) }}
    </template>
    <template #handler="scope">
      <div class="handler-btns">
        <el-button
          icon="edit"
          size="mini"
          type="text"
          @click="handleEditClick(scope.row)"
          >编辑</el-button
        >
        <el-button
          icon="delete"
          size="mini"
          type="text"
          @click="handleDeleteClick"
          >删除</el-button
        >
      </div>
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
  <pageModal
    ref="pageModalRef"
    :defaultModalVal="defaultModalVal"
    :modalConfig="modalConfig"
    @confirm="handleModalConfirm"
  />
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModal from '@/components/page-modal'

import { searchFormConfig } from './config/page-search'
import { contentTableConfig } from './config/page-content'
import { modalConfig } from './config/page-modal'

import { usePageSearch } from '@/hooks'
import { ref } from 'vue'
import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'

const [pageContentRef, queryBtnClick, resetBtnClick] = usePageSearch()

const pageModalRef = ref<InstanceType<typeof pageModal>>()
const defaultModalVal = ref({})

const handleEditClick = (item: any) => {
  pageModalRef.value && (pageModalRef.value.dialogVisible = true)
  modalConfig.title = '编辑'
  defaultModalVal.value = {
    ...item,
    tag: item.tag.map((item: any) => item.id),
    price: item.price / 100
  }
}

const handleAddClick = () => {
  pageModalRef.value && (pageModalRef.value.dialogVisible = true)
  modalConfig.title = '新增'
  defaultModalVal.value = {}
}

const handleModalConfirm = (val: any) => {
  console.log(val)
  //TODO 请求
  pageContentRef?.value?.getDataList()
}

const handleDeleteClick = () => {
  ElMessageBox.confirm('是否删除?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
      //TODO请求
      pageContentRef?.value?.getDataList()
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '删除取消'
      })
    })
}

const getTagList = () => {
  axios.get(`/mockapi/tag`).then((response) => {
    console.log(response.data.list)
    const tagIndex = modalConfig.formItems.findIndex(
      (item) => item.field == 'tag'
    )
    modalConfig.formItems[tagIndex].options = response.data.list.map(
      (item: any) => ({
        label: item.name,
        value: item.id
      })
    )
  })
}
getTagList()
</script>

<style lang="less" scoped>
.item-img {
  width: 90px;
  height: 90px;
}
.action-box {
  margin-bottom: 16px;
}
</style>
