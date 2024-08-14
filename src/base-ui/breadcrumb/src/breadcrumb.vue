<template>
  <div>
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="item in breadcrumbs" :key="item.name">
        <!-- :to="{ path: item.path }" -->
        <el-breadcrumb-item>{{ $t(item.name) }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { IBreadcrumb } from '../types'
import { ArrowRight } from '@element-plus/icons-vue'

const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})
</script>

<style scoped></style>
