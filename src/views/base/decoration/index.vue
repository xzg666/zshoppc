<style lang="less" src="./index.less"></style>
<template>
  <div class="decoration">
    <div class="decoration-hd">
      <div class="hd-lf">商城装修</div>
      <div class="hd-rg">
        <el-button plain @click="$router.go(-1)"> 后退 </el-button>
        <el-button type="primary" plain> 保存 </el-button>
      </div>
    </div>
    <div class="decoration-bd">
      <div class="left-container">
        <draggable
          v-model="widgets"
          :group="{
            name: 'easyview',
            pull: 'clone',
            put: false
          }"
          :sort="false"
          item-key="quickEntryName"
          class="left-container-box"
          animation="500"
          :clone="cloneDefaultField"
        >
          <template #item="{ element }">
            <div class="left-container-box-item">
              <div :class="['item-icon', element.wgtIcon]" />
              <div class="item-name">{{ element.wgtName }}</div>
            </div>
          </template>
        </draggable>
        {{ contentComps }}
      </div>
      <div class="center-container">
        <draggable
          v-model="contentComps"
          group="easyview"
          class="center-container-box"
        >
          <template #item="{ element }">
            <div class="center-container-box-item">
              <component :is="element.name" :value="element" />
            </div>
          </template>
        </draggable>
      </div>
      <div class="right-container">3</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import gWgts from './wgts'
import app from '@/main.ts'

const localScene = ref('1001')

const widgets = ref<any[]>([])

const regsiterWgts = () => {
  const wgts = (gWgts as any)[localScene.value]
  Object.keys(wgts).forEach((index: any) => {
    widgets.value.push(wgts[index])
    app.component(wgts[index].name, wgts[index]?.component)
  })
  console.log('wgts:', gWgts, wgts, widgets.value)
}

regsiterWgts()

const contentComps = ref<any[]>([])

const cloneDefaultField = (e) => {
  const { wgtName, name, setting } = e
  const compData = {
    name,
    wgtName
  }
  setting.forEach((item: any) => {
    ;(compData as any)[item.key] = item.value
  })
  console.log('compData', e, compData)
  return compData
}
</script>
