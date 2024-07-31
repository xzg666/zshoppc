<template>
  <el-container class="common-layout">
    <el-aside>
      <LayoutMenu />
    </el-aside>
    <el-container>
      <el-header>
        <LayoutHead />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LayoutMenu from '@/components/layout-menu.vue'
import LayoutHead from '@/components/layout-head.vue'
</script>
<style lang="less" scoped>
.common-layout {
  width: 100%;
  height: 100vh;
}
.el-aside {
  width: auto;
}
.el-header {
  height: 48px;
}
.el-main {
  background: #edf0f3;
}
</style>
