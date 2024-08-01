import { defineStore } from 'pinia'

interface ILangState {
    lang: string
}

const useLangStore = defineStore('lang', {
    state: (): ILangState => ({
        lang: 'zh'
    }),
    actions: {
        langToogleAction(value: string) {
            this.lang = value
        }
    },
    persist: true
})

export default useLangStore
