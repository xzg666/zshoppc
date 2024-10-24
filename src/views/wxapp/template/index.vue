<template>
  <div>
    <div v-if="!route.path.includes('/editor')">
      <el-button @click="$router.push('/wxapp/manage/decorate')"
        >去装修</el-button
      >
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
