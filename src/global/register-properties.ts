import { App, createVNode, render, nextTick, createApp } from 'vue'
import dayjs from 'dayjs'

import ZzPicker from '@/components/zz-picker'

export default function registerPropertirs(app: App) {
    app.config.globalProperties.$filters = {
        formatTime(value: string, format: string = 'YYYY-MM-DD hh:mm:ss') {
            return dayjs(value).format(format)
        }
    }
    app.config.globalProperties.$picker = () => {
        const pickerInstance = createVNode(ZzPicker);
        // const container = document.createElement('div');
        // document.body.appendChild(container);
        render(pickerInstance, document.body);
        nextTick(() => {
            console.log(6, pickerInstance!.component!.proxy)
            pickerInstance!.component!.proxy!.isVisible = true;
        });
    };
}