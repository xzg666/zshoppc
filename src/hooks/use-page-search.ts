import pageContent from "@/components/page-content";
import { ref } from "vue";


export function usePageSearch() {
    const pageContentRef = ref<InstanceType<typeof pageContent>>()

    const queryBtnClick = (val: any) => {
        pageContentRef?.value?.getDataList(val)
    }

    const resetBtnClick = () => {
        pageContentRef?.value?.getDataList()
    }

    return [pageContentRef, queryBtnClick, resetBtnClick]

}