<template>
  <div class="zz-table">
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectChange"
      v-bind="childrenProps"
      v-loading="loading"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        :label="$t('src.table.043838-0')"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column
          v-bind="propItem"
          align="center"
          :show-overflow-tooltip="propItem.tooltip"
        >
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 尾部分页 -->
    <div class="footer" v-if="showFooter">
      <el-pagination
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="page.page_no"
        :page-size="page.page_size"
        :total="listCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, watch, defineEmits } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  listData: {
    type: Array,
    required: true
  },
  propList: {
    type: Array,
    required: true
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showFooter: {
    type: Boolean,
    default: false
  },
  page: {
    type: Object,
    default: () => ({ page_no: 0, page_size: 10 })
  },
  listCount: {
    type: Number,
    default: 0
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'update:modelValue',
  'update:page',
  'selectionChange'
])

const handleSelectChange = (value: any) => {
  emit('selectionChange', value)
}
const handleCurrentChange = (page_no: number) => {
  emit('update:page', { ...props.page, page_no })
}

const handleSizeChange = (page_size: number) => {
  emit('update:page', { ...props.page, page_size })
}
</script>

<style scoped>
.zz-table {
  width: 100%;
  margin-bottom: 16px;
}
.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}
</style>
