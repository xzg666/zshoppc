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
          <template #item="{ element, index }">
            <div class="left-container-box-item">
              <div :class="['item-icon', element.wgtIcon]" />
              <div class="item-name">{{ element.wgtName }}</div>
              <div class="wgt-placeholder">
                <div class="placholder-txt">放置区域</div>
              </div>
            </div>
          </template>
        </draggable>
      </div>
      <div class="center-container">
        <draggable
          v-model="contentComps"
          group="easyview"
          class="center-container-box"
        >
          <template #item="{ element, index }">
            <div
              :class="[
                'center-container-box-item',
                { active: activeCompIndex == index }
              ]"
              @click="handleComClick(index)"
            >
              <div class="wgt-tools">
                <div class="wgt-tools-title">
                  {{ element.wgtName }}
                </div>
                <div class="wgt-tools-func" v-if="activeCompIndex == index">
                  <el-icon
                    :size="16"
                    color="#7D7D7D"
                    @click="handleWgtDelete(index)"
                  >
                    <DeleteFilled />
                  </el-icon>
                  <el-icon
                    :size="16"
                    color="#7D7D7D"
                    @click="handleWgtCopy(index)"
                  >
                    <DocumentCopy />
                  </el-icon>
                </div>
              </div>
              <component :is="element.name" :value="element" />
            </div>
          </template>
        </draggable>
        <el-backtop target=".center-container" :right="420" />
      </div>
      <div class="right-container">
        <div class="right-container-title">
          {{ getComponentAttr(contentComps[activeCompIndex])?.wgtName }}
        </div>
        <AttrPanel
          v-model="contentComps[activeCompIndex]"
          :info="getComponentAttr(contentComps[activeCompIndex])"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import gWgts from './wgts'
import app from '@/main.ts'
import AttrPanel from './attr_panel.vue'

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

const activeCompIndex = ref<any>(null)

const handleComClick = (idx) => {
  activeCompIndex.value = idx
}

const getComponentAttr = (item) => {
  const { wgtName, setting } =
    widgets?.value.find((wgt) => {
      return wgt?.name?.toLowerCase() == item?.name?.toLowerCase()
    }) ?? {}
  return {
    wgtName,
    setting
  }
}

const handleWgtDelete = (idx) => {
  contentComps.value.splice(idx, 1)
}

const handleWgtCopy = (idx) => {
  contentComps.value.splice(idx, 0, contentComps.value[idx])
}
</script>
