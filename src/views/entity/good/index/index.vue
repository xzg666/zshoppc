<template>
  <div>
    <div v-if="!route.path.includes('/editor')">
      <pageSearch
        :searchFormConfig="searchFormConfig"
        @queryBtnClick="queryBtnClick"
        @resetBtnClick="resetBtnClick"
      ></pageSearch>
      <div class="action-box">
        <el-button @click="isVisible = true">{{
          selecData.length
            ? selecData.map((item: any) => item.name).join(',')
            : '请选择'
        }}</el-button>
        <el-button @click="handlePickerClick">
          {{
            selecData.length
              ? selecData.map((item: any) => item.name).join(',')
              : '请选择'
          }}
        </el-button>
        <el-button @click="handleAddClick">{{
          $t('category.index.363177-0')
        }}</el-button>
        <el-button @click="handleAddDetailClick">{{
          $t('category.index.363177-0')
        }}</el-button>
      </div>
      <pageContent
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        @selectionChange="selectionChange"
      >
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
              >{{ $t('category.index.363177-1') }}</el-button
            >
            <el-button
              icon="delete"
              size="mini"
              type="text"
              @click="handleDeleteClick"
              >{{ $t('category.index.363177-2') }}</el-button
            >
            <el-button
              icon="edit"
              size="mini"
              type="text"
              @click="handleEditDtailClick(scope.row)"
              >{{ $t('category.index.363177-1') }}</el-button
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
      <ZzPicker
        type="goods"
        v-if="isVisible"
        :isVisible="isVisible"
        :value="pickerValue"
        @close="isVisible = false"
        @confirm="handlePickerConfirm"
      />
    </div>

    <router-view />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModal from '@/components/page-modal'

import { searchFormConfig } from './config/page-search'
import { contentTableConfig } from './config/page-content'
import { modalConfig } from './config/page-modal'

import ZzPicker from '@/components/zz-picker'

import { usePageSearch } from '@/hooks'

import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import dayjs from 'dayjs'
import i18n from '@/i18n'

import { getCurrentInstance } from 'vue'
const { t } = i18n.global

const instance = getCurrentInstance()
const picker = instance?.proxy?.$picker

const linkPage = ref('goods')
const handlePickerClick = async () => {
  const res = await picker.all({
    ids: selecData.value.map((item) => item.id),
    linkPage: linkPage.value
  })
  console.log(
    'picker res',
    res.data,
    res.data.map((item) => item.id)
  )
  selecData.value = res.data
  pickerValue.ids = res.data.map((item) => item.id)
  linkPage.value = res.linkPage
}

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

const pageModalRef = ref<InstanceType<typeof pageModal>>()
const defaultModalVal = ref({})

const handleEditClick = (item: any) => {
  pageModalRef.value && (pageModalRef.value.dialogVisible = true)
  modalConfig.title = t('category.index.363177-1')
  defaultModalVal.value = {
    ...item,
    tag: item.tag.map((item: any) => item.id),
    price: item.price / 100
  }
}

const handleEditDtailClick = (item: any) => {
  router.push(route.path + '/editor?itemId=' + item.id)
}

const handleAddClick = () => {
  pageModalRef.value && (pageModalRef.value.dialogVisible = true)
  modalConfig.title = t('category.index.363177-0')
  defaultModalVal.value = {}
}

const route = useRoute()
const router = useRouter()
const handleAddDetailClick = () => {
  router.push(route.path + '/editor')
}

const handleModalConfirm = async (val: any) => {
  console.log(val)
  //TODO 请求
  await pageContentRef?.value?.getDataList()
  setTimeout(() => {
    if (pageModalRef.value) {
      pageModalRef.value.confirmBtnLoading = false
      pageModalRef.value.dialogVisible = false
    }
  }, 1000)
}

const handleDeleteClick = () => {
  ElMessageBox.confirm(t('category.index.363177-3'), 'Warning', {
    confirmButtonText: t('category.index.363177-4'),
    cancelButtonText: t('category.index.363177-5'),
    type: 'warning'
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: t('category.index.363177-6')
      })
      //TODO请求
      pageContentRef?.value?.getDataList()
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: t('category.index.363177-7')
      })
    })
}

const selectionChange = (val: any) => {
  console.log(val)
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

const isVisible = ref(false)
const selecData = ref([])
const pickerValue = reactive({
  ids: []
})
const handlePickerConfirm = (val) => {
  console.log(val.length)
  selecData.value = val
  isVisible.value = false
  pickerValue.ids = val.map((item) => item.id)
}
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
