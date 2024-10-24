<template>
  <pageContent ref="pageContentRef" :contentTableConfig="contentTableConfig">
    <template #handler="scope">
      <div class="handler-btns">
        <el-button icon="edit" size="mini" type="text">编辑</el-button>
        <el-button icon="delete" size="mini" type="text">删除</el-button>
      </div>
    </template>
  </pageContent>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/page-content'
</script>
