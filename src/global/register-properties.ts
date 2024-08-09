import { App } from 'vue'
import dayjs from 'dayjs'

export default function registerPropertirs(app: App) {
    app.config.globalProperties.$filters = {
        formatTime(value: string) {
            return dayjs(value).format('YYYY-MM-DD hh:mm:ss')
        }
    }
}