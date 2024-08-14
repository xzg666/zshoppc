<template>
  <div>
    <pageForm
      :pageFormConfig="pageFormConfig"
      :defaultModalVal="defaultModalVal"
      ref="pageFormRef"
    >
      <!-- <template #header> 商品编辑 </template> -->
      <template #footer>
        <el-button @click="$router.go(-1)">取消</el-button>
        <el-button
          type="primary"
          :loading="saveBtnLoading"
          @click="handleSaveClick"
          >保存</el-button
        >
      </template>
    </pageForm>
  </div>
</template>

<script setup lang="ts">
import { pageFormConfig } from './config/page-form'
import pageForm from '@/components/page-form'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const defaultModalVal = ref()

onMounted(() => {
  getTagList()

  const itemId = useRoute().query.itemId
  if (itemId) {
    //请求编辑数据回显
    defaultModalVal.value = {
      name: '123',
      price: 0.6,
      tag: [1, 2]
    }
  }
})

const getTagList = () => {
  axios.get(`/mockapi/tag`).then((response) => {
    console.log(response.data.list)
    const tagIndex = pageFormConfig.formItems.findIndex(
      (item) => item.field == 'tag'
    )
    pageFormConfig.formItems[tagIndex].options = response.data.list.map(
      (item: any) => ({
        label: item.name,
        value: item.id
      })
    )
  })
}

const saveBtnLoading = ref(false)
const pageFormRef = ref()
const router = useRouter()

const handleSaveClick = () => {
  const { formData, validate } = pageFormRef.value || {}
  validate().then((res: any) => {
    if (res) {
      console.log(formData)
      saveBtnLoading.value = true
      //TODO请求
      setTimeout(() => {
        saveBtnLoading.value = false
        router.go(-1)
      }, 1000)
    }
  })
}
</script>

<style scoped></style>
