<template>
  <div>
    <div v-if="!route.path.includes('/editor')">
      <el-button @click="handleEdit">商品列表</el-button>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const handleEdit = () => {
  console.log(router)

  router.push(route.path + '/editor/123')
}
</script>
