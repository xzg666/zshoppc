<template>
  <el-button>dashbord</el-button>
</template>

<script setup lang="ts">
import { h } from 'vue'
const renderFunc = () => {
  return h('el-tag', {}, 123)
}
</script>
