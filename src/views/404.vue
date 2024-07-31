<template>
  <div class="errPage">
    <div class="err-content">
      <div class="err-txt">404</div>
      <el-button @click="$router.go(-1)">返回</el-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.errPage {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #edf0f3;
}
.err-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.err-txt {
  font-size: 48px;
  margin-bottom: 12px;
  color: #666;
}
</style>
