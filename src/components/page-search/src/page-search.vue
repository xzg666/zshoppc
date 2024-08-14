<template>
  <div :class="{ 'page-search': true, 'is-shirk': isExpand }">
    <zz-form v-bind="searchFormConfig" v-model="formData" ref="formRef">
      <template #header> </template>
      <template #footer>
        <div class="search-footer">
          <div>
            <el-button type="primary" icon="search" @click="handleQueryClick">{{
              $t('src.page-search.035853-0')
            }}</el-button>
            <el-button icon="refresh" @click="handleResetClick">{{
              $t('src.page-search.035853-1')
            }}</el-button>
          </div>
          <div class="expand" v-if="isShowExpand">
            <div @click="isExpand = !isExpand" class="expand-box">
              {{
                isExpand
                  ? $t('src.page-search.035853-2')
                  : $t('src.page-search.035853-3')
              }}
              <el-icon :size="14">
                <component :is="isExpand ? 'ArrowDown' : 'ArrowUp'"
              /></el-icon>
            </div>
          </div>
        </div>
      </template>
    </zz-form>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  defineProps,
  defineEmits,
  onMounted,
  onUnmounted,
  watch
} from 'vue'
import ZzForm from '@/base-ui/form/index'
import { COLLAYOUT } from '@/consts'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    default: () => ({})
  }
})
//formData的值不是写死的而是使用者传配置动态生成的
//双向绑定的属性应该是由配置文件的field来决定
const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
formItems.forEach((item: any) => {
  if (item.field) {
    formOriginData[item.field] = ''
  }
})
const formData = ref(formOriginData)

const emit = defineEmits(['resetBtnClick', 'queryBtnClick'])
//重置
const handleResetClick = () => {
  // formData.value = formOriginData
  //这会出现引用问题，form组件的fordata使用的浅拷贝modelvalue，这里直接修改formdata的值是无法修改到form组件的值的，因此需要修改里面的值
  for (const key in formOriginData) {
    formData.value[`${key}`] = formOriginData[key]
  }
  emit('resetBtnClick')
}
//搜索
const handleQueryClick = () => {
  emit('queryBtnClick', formData.value)
}

//动态计算屏幕宽度
const screenWidth = ref(window.innerWidth)

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const handleResize = () => {
  screenWidth.value = window.innerWidth
}

const isShowExpand = ref(false)

const handleShowExpand = (width: any) => {
  const { xl, lg, md, sm, xs } = props.searchFormConfig?.colLayout ?? COLLAYOUT
  let rowSpan
  if (width < 768) {
    rowSpan = xs
  } else if (width >= 768 && width < 992) {
    rowSpan = sm
  } else if (width >= 992 && width < 1200) {
    rowSpan = md
  } else if (width >= 1200 && width < 1920) {
    rowSpan = lg
  } else {
    rowSpan = xl
  }
  const rowNums = 24 / rowSpan
  isShowExpand.value = !!(props.searchFormConfig.formItems.length / rowNums > 2)
}

watch(
  () => screenWidth.value,
  (newValue) => {
    handleShowExpand(newValue)
  },
  { immediate: true }
)

const isExpand = ref(true)
</script>

<style lang="less" scoped>
.page-search {
  background: #f4f6f8;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
}
.is-shirk {
  height: 110px;
  overflow: hidden;
}
.search-footer {
  padding: 0 16px 16px 16px;
  box-sizing: border-box;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 210px;
}
.expand {
  margin-top: 8px;
}
.expand-box {
  display: flex;
  align-items: center;
  color: #333;
  font-size: 14px;
  el-icon {
    margin-left: 8px;
  }
}
/deep/.form {
  flex: 1;
  width: 200px;
}
/deep/.content {
  display: flex !important;
  width: 100%;
}
</style>
