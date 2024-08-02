<template>
  <div>
    <el-card style="width: 400px">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="$t('coms.login-panel.929736-0')" name="account">
          <PaneAccount ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane :label="$t('coms.login-panel.929736-1')" name="phone">
        </el-tab-pane>
      </el-tabs>
      <el-button type="primary" @click="handleLogin" :loading="loading">{{
        $t('coms.login-panel.929736-2')
      }}</el-button>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PaneAccount from './pane-account.vue'

const activeName = ref('account')

const loading = ref(false)

const handleClick = (val: any) => {
  console.log(activeName.value)
}

const accountRef = ref<InstanceType<typeof PaneAccount>>()

const handleLogin = async () => {
  if (activeName.value == 'account') {
    console.log(accountRef.value)
    loading.value = true
    await accountRef.value?.loginAction()
    loading.value = false
  } else {
  }
}
</script>

<style lang="scss" scoped></style>
