<template>
  <div>
    <el-form :model="form" :rules="rules" ref="formRef" label-width="100">
      <el-form-item :label="t('coms.pane-account.076228-0')" prop="account">
        <el-input v-model="form.account" />
      </el-form-item>
      <el-form-item
        :label="t('coms.pane-account.076228-1')"
        type="password"
        prop="password"
      >
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item :label="t('coms.pane-account.076228-2')" prop="code">
        <div class="code-box">
          <el-input v-model="form.code" />
          <img @click="resetCode" :src="codeUrl" alt="" />
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus'

import localCache from '@/utils/cache'
import { useRouter } from 'vue-router'
import { useLoginStore } from '@/stores/modules/index'
import { useI18n } from 'vue-i18n'

const form = reactive({
  account: 'xzg',
  password: '123456',
  code: ''
})

const router = useRouter()
const { t } = useI18n()
const rules = reactive({
  account: [
    {
      required: true,
      message: t('coms.pane-account.076228-3'),
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: t('coms.pane-account.076228-4'),
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: t('coms.pane-account.076228-5'),
      trigger: 'blur'
    }
  ]
})

const formRef = ref<InstanceType<typeof ElForm>>()

const codeUrl = ref<string>('api/login/code')

const resetCode = () => (codeUrl.value = codeUrl.value + '?' + Math.random())

const loginStore = useLoginStore()

function loginAction() {
  formRef.value?.validate(async (valid) => {
    if (valid) {
      // const { data } = await login(form)
      // localCache.setCache('token', data.token)
      // router.push('/main')
      // console.log(form, data)
      loginStore.loginAccountAction(form).then(() => {})
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.code-box {
  display: flex;
  img {
    flex: 1;
  }
}
</style>
