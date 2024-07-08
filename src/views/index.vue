<template>
  <el-button @click="handleLogout">退出登录</el-button>
</template>

<script setup lang="ts">
import localCache from '@/utils/cache'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  localCache.clearCache('token')
  router.push('/login')
}
</script>
