<template>
  <div>
    <el-card style="width: 300px">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="账号登录" name="account">
          <PaneAccount ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane label="手机号登录" name="phone"> </el-tab-pane>
      </el-tabs>
      <el-button type="primary" @click="handleLogin">登录</el-button>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PaneAccount from './pane-account.vue'

const activeName = ref('account')

const handleClick = (val: any) => {
  console.log(activeName.value)
}

const accountRef = ref<InstanceType<typeof PaneAccount>>()

const handleLogin = () => {
  if (activeName.value == 'account') {
    console.log(accountRef.value)

    accountRef.value?.loginAction()
  } else {
  }
}
onMounted(() => {
  accountRef.value = $refs.paneAccount
})
</script>

<style lang="scss" scoped></style>
