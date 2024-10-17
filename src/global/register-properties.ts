import { App, createVNode, render, nextTick, createApp } from 'vue'
import dayjs from 'dayjs'


export default function registerPropertirs(app: App) {
    app.config.globalProperties.$filters = {
        formatTime(value: string, format: string = 'YYYY-MM-DD hh:mm:ss') {
            return dayjs(value).format(format)
        }
    }
}