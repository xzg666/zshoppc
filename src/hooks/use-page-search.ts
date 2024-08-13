import pageContent from "@/components/page-content";
import { ref } from "vue";


export function usePageSearch(handleQueryFunc: (query: any) => any) {
    const pageContentRef = ref<InstanceType<typeof pageContent>>()

    const queryBtnClick = (val: any) => {
        //处理搜索请求参数
        const query = handleQueryFunc(val)
        pageContentRef?.value?.getDataList(query)
    }

    const resetBtnClick = () => {
        pageContentRef?.value?.getDataList()
    }

    return [pageContentRef, queryBtnClick, resetBtnClick]

}