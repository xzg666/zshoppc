<script lang="jsx">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus' // 假设你使用的是 Element Plus UI 库
import axios from 'axios'
import { ref } from 'vue'

export default defineComponent({
  name: 'ProductTagComponent',
  components: {
    ElButton
  },
  setup() {
    const dataList = [
      {
        date: '2023-04-01',
        name: '张三',
        imageUrl: 'path/to/image1.jpg',
        tag: ['新品', '爆品']
      },
      {
        date: '2023-04-01',
        name: '张三',
        imageUrl: 'path/to/image1.jpg',
        tag: ['新品', '爆品']
      },
      {
        date: '2023-04-01',
        name: '张三',
        imageUrl: 'path/to/image1.jpg',
        tag: ['新品', '爆品']
      }
    ]

    const propList = [
      { prop: 'date', label: '日期' },
      {
        prop: 'name',
        label: '姓名',
        render: (row) => {
          return <div>{row.name}</div>
        }
      },
      {
        prop: 'imageUrl',
        label: '图片',
        render: (row) => {
          return (
            <img src={row.imageUrl} style="width: 50px; height: 50px;"></img>
          )
        }
      },
      {
        prop: 'tag',
        label: '标签',
        render: (row) => {
          return (
            <>
              {row.tag.map((item) => {
                return <el-tag>{item}</el-tag>
              })}
            </>
          )
        }
      }
    ]

    return () => {
      return (
        <div>
          <ElButton>商品标签</ElButton>
          <el-table data={dataList} border style="width: 100%">
            {propList.map((propItem) => {
              return (
                <el-table-column {...propItem} align="center">
                  {({ row }) =>
                    propItem.render ? (
                      <span>{propItem.render(row)}</span>
                    ) : (
                      <span>{row[propItem.prop]}</span>
                    )
                  }
                </el-table-column>
              )
            })}
          </el-table>
        </div>
      )
    }
  }
})
</script>

<style scoped>
/* 你的样式 */
</style>
