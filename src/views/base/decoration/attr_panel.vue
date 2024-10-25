<style lang="less" src="./attr_panel.less"></style>
<template>
  <div class="attr_panel">
    <!-- {{ info }}
    {{ modelValue }} -->
    <div v-for="(item, idx) in info?.setting" :key="idx">
      <div class="panel-item">
        <div class="panel-item-label">{{ item.label }}:</div>
        <div class="panel-item-content">
          <template v-if="typeof item.component == 'string'">
            <!-- 默认组件 -->
            <template v-if="item.component == 'input'">
              <el-input v-model="modelValue[item.key]" />
            </template>
            <template v-if="item.component == 'textarea'">
              <el-input
                v-model="modelValue[item.key]"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 6 }"
              />
            </template>
            <template v-if="item.component == 'switch'">
              <el-switch v-model="modelValue[item.key]" />
            </template>
            <template v-if="item.component == 'color'">
              <el-color-picker v-model="modelValue[item.key]" />
            </template>
          </template>
          <template v-else>
            {{ modelValue[item.key] }}
            <component :is="item.component" v-model="modelValue[item.key]" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  info: {
    type: Object,
    required: true
  }
})

const widgets = ref<any[]>([])
</script>
