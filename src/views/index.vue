<template>
  <!-- <el-button @click="handleLogout">退出登录</el-button>
  <el-button @click="handleclick">/entity/func/category</el-button> -->
  <el-container class="common-layout">
    <el-aside>
      <LayoutMenu />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLoginStore } from '@/stores/modules/index'
import LayoutMenu from '@/components/layout-menu.vue'

const router = useRouter()

const handleLogout = () => {
  useLoginStore()?.handleLogout()
  router.push('/login')
}

const handleclick = () => {
  router.push('/entity/func/category')
}
</script>
<style lang="less" scoped>
.common-layout {
  width: 100%;
  height: 100vh;
}
.el-aside {
  width: auto;
}
</style>
