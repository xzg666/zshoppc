<template>
  <el-button @click="handleToggleLange">dashbord</el-button>
  {{ $t('test') }}
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
const handleToggleLange = () => {
  console.log(i18n.locale.value)
  i18n.locale.value = i18n.locale.value == 'en' ? 'zn' : 'en'
}
</script>
