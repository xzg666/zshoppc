<template>
  <div class="layout-head">
    <div>bread</div>
    <div>
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
import { useLoginStore } from '@/stores/modules/index'
import { useRouter } from 'vue-router'

const loginStore = useLoginStore()
const router = useRouter()

const {
  userInfo: { avatar, name }
} = loginStore

const handleLogout = () => {
  loginStore.handleLogout()
  location.reload()
}
</script>

<style lang="less" scoped>
.layout-head {
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
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
  }
}
</style>
