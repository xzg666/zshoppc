<template>
  <div class="layout-head">
    <div></div>
    <div class="layout-head-right">
      <!-- 语言 -->
      <el-dropdown @command="handleLangClick" trigger="hover">
        <el-button text>
          {{ $t('langSeeting.toggle')
          }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="lang in langList"
              :key="lang.label"
              :command="lang.label"
              >{{ $t(`${lang.value}`) }}
              <el-icon
                v-if="i18n.locale.value == lang.label"
                color="#409efc"
                class="no-inherit"
              >
                <Check />
              </el-icon>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- 功能 -->
      <el-popover placement="bottom" :width="200" trigger="hover">
        <template #reference>
          <img v-if="avatar" :src="avatar" class="avatar" />
          <el-icon v-else class="default-avatar">
            <Avatar />
          </el-icon>
        </template>
        <div class="func-box">
          <div class="func-info">
            <img v-if="avatar" :src="avatar" class="avatar" />
            <el-icon v-else class="default-avatar">
              <Avatar />
            </el-icon>
            <div class="func-right">
              <div>{{ name }}</div>
              <div class="func-right-info">账号信息</div>
            </div>
          </div>
          <div class="logout-txt" @click="handleLogout">退出登录</div>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore, useLangStore } from '@/stores/modules/index'
import { ElLoading } from 'element-plus'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const loginStore = useLoginStore()

const langList = reactive([
  { label: 'zh', value: 'langSeeting.chinese' },
  { label: 'en', value: 'langSeeting.english' }
])

const {
  userInfo: { avatar, name }
} = loginStore

const handleLogout = () => {
  loginStore.handleLogout()
}

const handleLangClick = (command: string) => {
  const loading = ElLoading.service({
    lock: true,
    text: '切换语言中...',
    background: 'rgba(0,0,0,0.5)'
  })

  useLangStore()?.langToogleAction(command)
  i18n.locale.value = command
  loading?.close()
}
</script>

<style lang="less" scoped>
.layout-head {
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  &-right {
    display: flex;
    align-items: center;
  }
}
.default-avatar {
  font-size: 22px;
  color: #fff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background: #999;
  text-align: center;
  line-height: 36px;
}
.avatar {
  border-radius: 50%;
  width: 36px;
  height: 36px;
}
.func-box {
  .func-info {
    box-sizing: border-box;
    border-bottom: #f5f5f5 1px solid;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    box-sizing: border-box;
  }
  .func-right {
    color: #999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    margin-left: 12px;
    &-info {
      font-size: 12px;
      color: #ccc;
      margin-top: 6px;
    }
  }
  .logout-txt {
    color: #999;
    font-size: 14px;
    padding-top: 10px;
    cursor: pointer;
  }
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.el-dropdown-link {
  display: flex;
}

.el-dropdown-link:focus {
  border: none !important;
}
.no-inherit {
  margin-left: 6px;
}
</style>
