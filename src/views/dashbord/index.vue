<template>
  <el-button @click="handleToggleLange">dashbord</el-button>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }} - {{ user.desc }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
const handleToggleLange = () => {
  console.log(i18n.locale.value)
  i18n.locale.value = i18n.locale.value == 'en' ? 'zn' : 'en'
}

const users = ref<any[]>([])

// axios
//   .get('/mockapi/category', { data: { page_size: 10, page_no: 2 } })
//   .then((response) => {
//     console.log(response)
//     // 注意：这里应该使用正确的变量名来接收数据
//     users.value = response.data.list // 假设你想把分类列表存储在 users 变量中（但实际上应该是 categories）
//   })
//   .catch((error) => {
//     console.error('请求失败:', error)
//   })

axios
  .get('/mockapi/good', { data: { page_size: 10, page_no: 1 } })
  .then((response) => {
    console.log(response)
    // 注意：这里应该使用正确的变量名来接收数据
    users.value = response.data.list // 假设你想把分类列表存储在 users 变量中（但实际上应该是 categories）
  })
  .catch((error) => {
    console.error('请求失败:', error)
  })
</script>
