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
        <div class="main-container">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LayoutMenu from '@/components/layout-menu/index.vue'
import LayoutHead from '@/components/layout-head/index.vue'
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
.main-container {
  background: #fff;
  padding: 16px;
}
</style>
