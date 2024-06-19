<template>
  <div>
    <el-form :model="form" :rules="rules" ref="formRef" label-width="60">
      <el-form-item label="账号" prop="account">
        <el-input v-model="form.account" />
      </el-form-item>
      <el-form-item label="密码" type="password" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus'

const form = reactive({
  account: '',
  password: ''
})

const rules = reactive({
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const formRef = ref<InstanceType<typeof ElForm>>()

function loginAction() {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log(form)
    } else {
      ElMessage.error('Oops, 请您输入正确的格式后再操作~~.')
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="scss" scoped></style>
