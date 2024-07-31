<template>
  <div class="layout-menu">
    <!-- 主菜单 -->
    <div class="main-menu">
      <div class="brand">
        <div class="brand-img">
          <img :src="userInfo.brandImg" />
        </div>
      </div>

      <el-menu :default-active="activeMenu">
        <el-menu-item
          v-for="menu in userMenus"
          :key="menu.url"
          :index="menu.url"
          @click="handleMenuItemClick(menu, 1)"
        >
          {{ menu.name }}
        </el-menu-item>
      </el-menu>
    </div>

    <!-- 子菜单 -->
    <div class="sub-menu" v-if="subMenus.length">
      <el-menu :default-active="activeSubMenu">
        <template v-for="(smenu, idx) in subMenus" :key="idx">
          <el-menu-item
            v-if="!smenu.children"
            :index="smenu.url"
            @click="handleMenuItemClick(smenu, 2)"
          >
            {{ smenu.name }}
          </el-menu-item>

          <el-sub-menu :index="smenu.url" v-else>
            <template #title>
              <span>{{ smenu.name }}</span>
            </template>
            <el-menu-item
              v-for="cmenu in smenu.children"
              :index="cmenu.url"
              :key="cmenu.url"
              @click="handleMenuItemClick(cmenu, 3)"
            >
              {{ cmenu.name }}
            </el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { useLoginStore } from '@/stores/modules/index'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { mapPathToMenu } from '@/utils/menu'

const loginStore = useLoginStore()

const { userMenus, userInfo } = loginStore

const route = useRoute()

const activeMenu = computed(() => {
  let [_activeMenu, _activeSubMenu, _activeIndex] = mapPathToMenu(
    route.path,
    userMenus
  )
  return _activeMenu
})

const activeSubMenu = computed(() => {
  let [_activeMenu, _activeSubMenu, _activeIndex] = mapPathToMenu(
    route.path,
    userMenus
  )
  return _activeSubMenu
})

const subMenus = computed(() => {
  let [_activeMenu, _activeSubMenu, _activeIndex] = mapPathToMenu(
    route.path,
    userMenus
  )
  return userMenus[_activeIndex]?.children || []
})

const getMenuUrl = (route: any) => {
  let url = null
  if (route.children) {
    const firstChildren = route.children[0]
    if (firstChildren.children) {
      url = firstChildren.children[0]?.url
    } else {
      url = firstChildren?.url
    }
  } else {
    url = route.url
  }
  return url
}

const handleMenuItemClick = (route: any, type: Number) => {
  let url
  if (type == 1) {
    url = getMenuUrl(route)
  } else {
    url = route.url
  }
  //   console.log(url)
  router.push(url)
}
</script>

<style lang="less" scoped>
.layout-menu {
  display: flex;
}
.main-menu {
  width: 100px;
  height: 100vh;
  background: #2f2e32;
  .brand {
    padding: 12px 0;
  }
  .brand-img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-sizing: border-box;
    img {
      width: 100%;
    }
  }
  .el-menu {
    background: #2f2e32;
    border-right: none;
    padding: 0 10px;
  }
  .el-menu-item {
    color: #fff;
    padding: 0 !important;
    height: 40px;
    padding: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
  .el-menu-item:hover {
    background: #444347 !important;
  }
  .is-active {
    color: red;
    background: #444347;
  }
}
.sub-menu {
  width: 130px;
  padding: 10px 0;
  .is-active .el-menu-item,
  .is-active.el-menu-item {
    color: red;
    background: #fae7e8;
  }

  .el-menu {
    border-right: none;
    padding: 0 10px;
  }
  .el-menu-item:hover {
    background: #fae7e8 !important;
  }
  .el-menu-item {
    padding: 0 !important;
    height: 40px;
    padding: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
  .el-sub-menu .el-sub-menu__title {
    height: 40px !important;
  }
}
</style>
<style lang="less">
.sub-menu {
  .el-sub-menu__title:hover {
    background: none !important;
  }
  .el-sub-menu__title {
    height: 40px !important;
  }
}
</style>
