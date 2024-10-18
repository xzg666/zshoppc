import { createApp, createVNode, defineComponent, nextTick, onMounted, onUnmounted, render, h } from 'vue';
import Main from './main.vue';
// import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18n, { getCurrLang } from "@/i18n";
import elementplusZhCn from 'element-plus/es/locale/lang/zh-cn'
import elementplusEn from 'element-plus/es/locale/lang/en'

const $pickerFunctions = {
    goods: (args: any) => {
        return showPicker({ value: { ...args }, type: 'goods', width: '1008px' });
    },
    router: (args: any) => {
        return showPicker({ value: { ...args }, type: 'router', width: '788px' });
    },
};

const showPicker = (data: any) => {
    return new Promise<void>((resolve, reject) => {
        const Vnode: any = h(Main, {
            ...data,
            dialogVisible: true,
            close: () => {
                reject("close");
                document.body.removeChild(container);
            },
            confirm: (res: any) => {
                resolve(res);
                render(null, container);
                document.body.removeChild(container);
            },
        });
        const container = document.createElement('div');

        const app = createApp(Vnode)
        //这里需要都注册一次
        app.use(i18n)
        app.use(ElementPlus, {
            locale: getCurrLang() == 'zh' ? elementplusZhCn : elementplusEn,
        })
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
        app.mount(container)
        document.body.appendChild(container);
    })

};

export default {
    install(app: any) {
        app.config.globalProperties.$picker = $pickerFunctions;
    },
};