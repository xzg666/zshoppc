import { createApp, createVNode, defineComponent, nextTick, onMounted, onUnmounted, render } from 'vue';
import Main from './main.vue';
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

const $pickerFunctions = {
    goods(args: any) {
        return showPicker({ value: { ...args }, type: 'pickerGoods', width: '1008px' });
    },
    router(args: any) {
        return showPicker({ value: { ...args }, type: 'PickerRouter', width: '788px' });
    },
};

const showPicker = (data: any) => {
    return new Promise<void>((resolve, reject) => {

        const vm = defineComponent({
            components: { Main },
            data() {
                return {
                    ...data,
                    dialogVisible: true,
                };
            },
            setup(props) {
                const teardown = () => {
                    vm.unmount();
                };
                onMounted(() => {
                    onUnmounted(teardown);
                    const closeHandler = () => teardown();
                    const inputHandler = (val: any) => {
                        teardown();
                        return Promise.resolve(val);
                    };
                    // emit('close', closeHandler);
                    // emit('input', inputHandler);
                });
                return {
                    MainComponent: Main,
                };
            },
            template: '<Main v-if="dialogVisible" />',
        });
        console.log(444, vm)
        const newApp = createApp(vm)
        newApp.use(ElementPlus)
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            newApp.component(key, component)
        }
        const componentInstance = newApp.mount(document.createElement('div'));
        document.body.appendChild(componentInstance.$el);
    })

};

export default {
    install(app, options = {}) {
        app.component('Main', Main);
        app.config.globalProperties.$picker = $pickerFunctions;
    },
};